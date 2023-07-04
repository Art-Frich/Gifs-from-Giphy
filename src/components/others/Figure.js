import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Figure.css';

export default function Figure({ title, url }) {
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();

  const imageStyle = {
    width: location.pathname === '/random-gif' ? '100%' : 'auto',
    maxWidth: location.pathname === '/random-gif'  ? '1280px' : '100%',
    height: location.pathname === '/random-gif'  ? 'auto' : '300px',
    maxHeight: location.pathname === '/random-gif' ? '960px' : '100%'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <figure className="figure">
      <img className="figure__img" alt={ title || "just gif =)" } src={ url } style={imageStyle} />
      <figcaption className="figure__figcaption">{ title || "just gif =)" }</figcaption>
      <button onClick={handleCopy}>
        {isCopied 
          ? <img className="figure__icon" src="/src/images/ready.svg" alt="Скопировано!" /> 
          : <img className="figure__icon" src="/src/images/Share.svg" alt="Скопировать ссылку" />
        }
      </button>
    </figure>
  );
}