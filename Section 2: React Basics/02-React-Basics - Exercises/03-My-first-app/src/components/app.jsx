import React, { Component } from 'react';

import SearchBar from './search_bar';

class App extends Component {
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'></div>
        </div>
        <div className='right-scene'>
          <div className='gif-list'></div>
        </div>
      </div>
    );
  }
}

export default App;
