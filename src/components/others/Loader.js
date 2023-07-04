import './Loader.css';

export default function Loader(){
  return(
    <div className='loader'>
    <div className="loader__circle">
      <span className='loader__section' />
      <span className='loader__section' />
      <span className='loader__section' />
      <span className='loader__section' />
    </div>
    <span className='loader__msg'>Loading...</span>
    </div>
  )  
}