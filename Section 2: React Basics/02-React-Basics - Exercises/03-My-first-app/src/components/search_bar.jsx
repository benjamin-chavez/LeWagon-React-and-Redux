import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // will need to take this input and us it to search
    console.log(event.target.value);
  };

  render() {
    return (
      <input
        type='text'
        className='form-search form-control'
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
