import './ClearBtn.css';

export default function ClearBtn({ onClick }){

  return(<button 
    className='clear-btn' 
    type="button" 
    onClick={ onClick } 
  /> ) 
 }