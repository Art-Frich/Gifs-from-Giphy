import { Link } from "react-router-dom";

export default function OneGif({src, alt, title, subtitle}){
  return(
  <section >
    <Link to="/search">⟵ Go back</Link>
    <img src={src} alt={alt} />
    <p> {title}</p>
    <p> {subtitle}</p>
  </section>
  ) 
 }