import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectedGif(this.props.id);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id; // Don't call render if props.id did not change
  }

  render() {
    console.log('GIF RENDERED ' + this.props.id);
    if (!this.props.id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`;
    return <img src={src} alt='' className='gif' onClick={this.handleClick} />;
  }
}

export default Gif;
