import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // const selectedGifIdTwo = this.props.id;
    // console.log(selectedGifIdTwo);
    this.props.selectGiphyFunction(this.props.id);
  };

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return <img src={src} className='gif' onClick={this.handleClick} />;
  }
}

export default Gif;
