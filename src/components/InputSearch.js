import './InputSearch.css';

export default function InputSearch({ placeholder }){
  return(
    <input
      type="text"
      className='search-input'
      placeholder={placeholder}
    />
  ) 
 }