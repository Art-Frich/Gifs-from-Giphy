import React from 'react';
import Figure from './Figure.js';
import './Grid.css';

export default React.memo(function Grid({ gifs, curPageIndex, gifsOnPage }) {
  const gridElements = gifs?.slice( curPageIndex * gifsOnPage, gifsOnPage * (curPageIndex + 1) )
  .map((gif) => (
    <Figure
      key={ gif.id }
      title={ gif.title }
      url={ gif.images.downsized_medium.url }
    />
  ));

  return <div className="grid">{gridElements}</div>;
})