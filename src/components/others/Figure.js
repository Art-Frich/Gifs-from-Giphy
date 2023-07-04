import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import iconShare from '../../images/Share.svg';
import iconShareReady from '../../images/ready.svg'
import './Figure.css';

export default function Figure({ title, url }) {
  const [isCopied, setIsCopied] = useState(false);
  const location = useLocation();

  const imageStyle = {
    width: location.pathname === '/random-gif' ? '100%' : 'auto',
    maxWidth: location.pathname === '/random-gif'  ? '1280px' : '100%',
    height: location.pathname === '/random-gif'  ? 'auto' : 'none',
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
      <div className='figure__figcaption-container'>
        <figcaption className="figure__figcaption">{ title || "just gif =)" }</figcaption>
        <button className='figure__share-button' onClick={handleCopy}>
          {isCopied 
            ? <img className="figure__icon" src={ iconShareReady } alt="Скопировано!" /> 
            : <img className="figure__icon" src={ iconShare } alt="Скопировать ссылку" />
          }
        </button>
      </div>
    </figure>
  );
}
