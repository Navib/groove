import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeTrailer } from '../actions/index';

class ActiveTrailer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.activeTrailer(this.props.movieId)
  }
  componentWillReceiveProps(nextProps, props) {
    if(nextProps.movieId != this.props.movieId){
      this.props.activeTrailer(nextProps.movieId)
    }
  }
  render() {
    if(!this.props.selectedTrailer) {
      return <div className="col-md-8">...Loading</div>;
    }
    else if(this.props.selectedTrailer.results.length === 0) {

      if(!this.props.selectedMovie) {
          return <div className="col-md-8">image</div>
      }
      else {
      const poster = ((this.props.selectedMovie.backdrop_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/original/${this.props.selectedMovie.backdrop_path}`);
        return (
          <div className="col-md-8">
            <img src={poster} className="single-movie-poster"/>
          </div>
        )
      }
    }
    //console.log("render Trailer: ", this.props);
    return (
      <div className="col-md-8">

        <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={`https://www.youtube.com/embed/${this.props.selectedTrailer.results[0].key}`}
          frameBorder="0"
          allowFullScreen
          className="single-movie-iframe embed-responsive-item"
          ></iframe>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedTrailer: state.activeTrailer[0],
  selectedMovie: state.activeMovie[0],
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activeTrailer }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ActiveTrailer);
