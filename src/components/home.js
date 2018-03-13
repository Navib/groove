import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';
import NowPlaying from './../containers/now_playing';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <SearchBar history={this.props.history} class="col-md-6 col-md-offset-3"/>
          <NowPlaying />
        </div>
      </div>
    )
  }
}

export default Home;
