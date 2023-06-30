import './ClearBtn.css';

export default function ClearBtn({title}){

  return(
    <button className='clear-btn' type="button">
      {title}
    </button>
  ) 
 }