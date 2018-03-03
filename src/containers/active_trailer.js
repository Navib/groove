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
  render() {
    if(!this.props.selectedTrailer) {
      return <div>...Loading</div>;
    }
    else if(this.props.selectedTrailer.results.length === 0) {
      console.log("return: ", this.props.selectedMovie);

      if(!this.props.selectedMovie) {
          return <div>image</div>
      }
      else {
      const poster = ((this.props.selectedMovie.backdrop_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w185/${this.props.selectedMovie.backdrop_path}`);
        return (
          <img src={poster} />
        )
      }
    }
    console.log("render Trailer: ", this.props);
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.selectedTrailer.results[0].key}`}
          frameBorder="0"
          allowFullScreen></iframe>
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
