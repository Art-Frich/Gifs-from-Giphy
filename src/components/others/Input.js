import './Input.css';

export default function Input({ 
  placeholder, onChange, value, type, min = '1', max = '50', minLength = '2', maxLength = '100'
}){
  return( <input
    type={ type }
    className='input'
    placeholder={placeholder}
    onChange={ onChange }
    value={ value }
    min={ min }
    max={ max }
    minLength={ minLength }
    maxLength={ maxLength }
  />) 
}