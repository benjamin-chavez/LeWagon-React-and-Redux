import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate(event) => {
    // START HERE BY CONSOLE LOGGING THE INPUT OF THE SEARCH BAR
  }
  
  render() {
    return (
      <input
        type='text'
        className='form-search form-control'
        onChange='this.handleUpdate'
      />
    );
  }
}

export default SearchBar;
