import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          selected={flat.name === this.props.selectedFlat.name}
          key={flat.lat}
          index={index}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          selectFlat={this.props.selectFlat}
        />
      );
    });
  };

  render() {
    return <div className='flat-list'>{this.renderList()}</div>;
  }
}

export default FlatList;
