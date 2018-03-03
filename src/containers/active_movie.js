import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMovie } from '../actions/index';

class ActiveMovie extends Component {
  constructor(props) {
    super(props);
    console.log("ActiveMovie Container: ",this.props);
  }
  componentWillMount() {
    this.props.activeMovie(this.props.movieId)
  }

  render() {
    if(!this.props.activeMovie[0]) {
      return <div>Select a book to get started</div>;
    }
    return (
      <div>got it</div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeMovie: state.activeMovie,
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activeMovie }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ActiveMovie);
