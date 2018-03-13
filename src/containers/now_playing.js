import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../actions/index';
import Swiper from 'swiper';
import SimilarMoviesSlide from './../components/similar_movies_slide';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    console.log("Now Playing: ", this.props);
  }
  componentWillMount() {
    this.props.fetchNowPlaying();
  }
  componentDidUpdate() {
    const nowPlayingSwiper = new Swiper('.now-playing-container', {
      slidesPerView: 5,
      spaceBetween: 27,
      scrollbar: {
        el: '.now-playing-scrollbar',
        hide: true,
      },
      navigation: {
        nextEl: '.now-playing-button-next',
        prevEl: '.now-playing-button-prev',
      },
      preventClicks: false,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="tooltip"]').on("click", function() {
      $(this).tooltip('hide');
    });
  }
  renderMovies(movieData) {
    return movieData.map((movie) => {
      const id = movie.id;
      const title = movie.title;
      const poster = ((movie.poster_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`);
      const overview = movie.overview.substring(0, 140) + '...';
      const rating =  movie.vote_average;
      const releaseDate = movie.release_date;
      const language = movie.original_language;

  return (
        <SimilarMoviesSlide
          key={id}
          movieId={id}
          title={title}
          poster={poster}
          rating={rating}
          overview={overview}
          releaseDate={releaseDate.slice(0, releaseDate.indexOf("-"))}
          language={language.toUpperCase()}
        />
      )
    });
  }
  render() {
    if(!this.props.nowPlaying) {
      return <div className="col-md-12">...Loading</div>;
    }
    console.log(this.props.nowPlaying);
    return (
      <div className="now-playing-slider-wrapper col-lg-12">
        <h1>In Theatres</h1>
        <div className="col-md-12 swiper-container now-playing-container ">
          <div className="swiper-wrapper now-playing-wrapper">
            {this.props.nowPlaying.map(this.renderMovies)}
          </div>
        </div>
        <div className="swiper-button-next now-playing-button-next"><i className="fas fa-angle-right"></i></div>
        <div className="swiper-button-prev now-playing-button-prev"><i className="fas fa-angle-left"></i></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNowPlaying }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(NowPlaying);
