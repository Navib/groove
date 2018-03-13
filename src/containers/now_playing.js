import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNowPlaying } from '../actions/index';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    console.log("Now Playing: ", this.props);
  }
  componentWillMount() {
    this.props.fetchNowPlaying();
  }
  render() {
    if(!this.props.nowPlaying) {
      return <div className="col-md-8">...Loading</div>;
    }
    console.log(this.props.nowPlaying);
    return (
      <div className="col-md-12">Now Playing</div>
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
