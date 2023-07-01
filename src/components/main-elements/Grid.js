import Figure from './Figure.js';

import './Grid.css';

export default function Grid({ gifs }) {
  const gridElements = gifs.map((gif) => (
    <Figure
      key={gif.id}
      alt={gif.title}
      src={gif.images.fixed_height.url}
      title={gif.title}
    />
  ));

  return <div className="grid">{gridElements}</div>;
}
