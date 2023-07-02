import Figure from './Figure.js';

import './Grid.css';

export default function Grid({ gifs }) {
  const gridElements = gifs?.map((gif) => (
    <Figure
      key={ gif.id }
      title={ gif.title }
      url={ gif.images.downsized_medium.url }
    />
  ));

  return <div className="grid">{gridElements}</div>;
}
