import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  constructor(props) {
    super(props)
    console.log("movielist: ",this.props.movies);
  }
  renderMovie(movieData){
    console.log("moviesdata: ",movieData);
    return movieData.map((movie) => {
      console.log("map: ", movie.title);
      const title = movie.title;
      const id = movie.id;
      const poster = movie.poster_path;

      return (
        <div key={id} className="col-md-3">
          <img src={`http://image.tmdb.org/t/p/w185/${poster}`} />
          <p>{title}</p>
        </div>
        )
    });
  }
  render() {
    return (
      <div>
        {this.props.movies.map(this.renderMovie)}

      </div>
    )
  }
}

const mapStatetoProps  = (movies) => {
  return (movies)
}
export default connect(mapStatetoProps)(MovieList);
