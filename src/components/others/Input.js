import './Input.css';

export default function Input({ placeholder, onChange, value }){
  return( <input
    type="text"
    className='search-input'
    placeholder={placeholder}
    onChange={ onChange }
    value={ value }
  />) 
}