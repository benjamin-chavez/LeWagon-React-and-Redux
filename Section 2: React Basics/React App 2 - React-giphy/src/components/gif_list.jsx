import React, { Component } from 'react';

import Gif from './gif';

// Destructuring

const GifList = ({ gifs, selectedGif }) => {
  return (
    <div className='gif-list'>
      {gifs.map(({ id }) => (
        <Gif id={id} key={id} selectedGif={selectedGif} />
      ))}
    </div>
  );
};

export default GifList;
