import { Link } from 'react-router-dom';

import './Figure.css';

export default function Figure({ title, subtitle, alt, src, id }) {
  return (
    <figure className="grid-item">
      <Link to={`/gif/${id}`}>
        <img className="grid-item__img" alt={alt} src={src} />
      </Link>
    </figure>
  );
}
