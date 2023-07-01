import { Link } from "react-router-dom";

import './Figure.css';

export default function Figure({ title, subtitle, alt, src, id }){
  return(
    <figure className="grid-item">
      {/* открывать гифку на весь экран по клику, нужно прописать отдельный роут */}
      <Link to={`/gif/${id}`}>
        <img className="grid-item__img" alt={alt} src={src} />
        <figcaption className="grid-item__figcaption">{title}</figcaption>
      </Link>
    </figure>
  ) 
 }