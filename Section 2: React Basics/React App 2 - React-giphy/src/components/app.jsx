import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null, //'l0HlNbeDtLwwkBUiI',
    };
  }

  search = (query) => {
    giphy('utW7KarrlcaC6cJ7sj0Edxa4TitmcX7p').search(
      {
        q: query,
        rating: 'g',
        limit: 10,
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        });
      }
    );
  };

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id,
    });
  };

  render() {
    const gifs = [{ id: 'l0HlNbeDtLwwkBUiI' }, { id: '146LEiGaXeGSek' }];

    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
