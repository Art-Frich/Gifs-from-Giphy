import { Link } from "react-router-dom";

export default function GridItem({ title, subtitle, alt, src, id }){
  return(
    // открывать гифку на весь экран по клику, нужно прописать отдельный роут
    <Link to={`/gif/${id}`}>
      <img alt={alt} src={src} />
      <p>{title}</p>
      <p>{subtitle}</p>
    </Link>
  ) 
 }