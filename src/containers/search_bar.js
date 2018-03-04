import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term:''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    console.log("search: ", this.props);
  }
  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.term);
    this.setState({
      term:''
    });
    this.props.history.push('/')
  }
  render() {
    return (
      <form className="input-group col-md-6 col-md-offset-3" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Enter A Movie"
          className="form-control search-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
