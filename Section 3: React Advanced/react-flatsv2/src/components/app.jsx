import React, { Component } from 'react';

import Map from './map';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />

        <div className='map-container'>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
