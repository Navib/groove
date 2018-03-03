import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMovie } from '../actions/index';

class ActiveMovie extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.activeMovie(this.props.movieId)
  }

  render() {
    if(!this.props.selectedMovie) {
      return <div>...Loading</div>;
    }
    //console.log("render: ", this.props);
    return (
      <div>title: {this.props.selectedMovie.title}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.activeMovie[0],
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activeMovie }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ActiveMovie);
