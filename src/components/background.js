import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMovie } from '../actions/index';

class Background extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    
  }
  render() {
    console.log("background: ",this.props);
    if(!this.props.selectedMovie) {
      return (
        <div>Loading..</div>
      )
    }
    const poster = ((this.props.selectedMovie.backdrop_path === null) ? `http://image.tmdb.org/t/p/original/${this.props.selectedMovie.poster_path}` : `http://image.tmdb.org/t/p/original/${this.props.selectedMovie.backdrop_path}`);
    const divStyle = {
      backgroundImage: `url(${poster})`,
    };
    return (
      <div className="mv-background" style={divStyle}></div>
    )
  }
}
const mapStateToProps = (state) => ({
  selectedMovie: state.activeMovie[0],
})
export default connect(mapStateToProps,)(Background);
