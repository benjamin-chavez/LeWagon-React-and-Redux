import React, { Component } from 'react';

import Gif from './gif';

class SelectedGif extends Component {
  handleUpdate = (event) => {
    this.props.selectGif(event.target);
  };

  render() {
    return (
      <div>
        <Gif id={this.state.selectedGifId} />
      </div>
    );
  }
}

export default SelectedGif;
