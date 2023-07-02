import { forwardRef, useEffect } from 'react';
import './InputSearch.css';

function InputSearch({ placeholder, onChange, value }, ref ){

  useEffect( () => {
    ref.current.value = value;
  // eslint-disable-next-line
  }, [])

  return( <input
    type="text"
    className='search-input'
    placeholder={placeholder}
    onChange={ onChange } 
    ref={ ref } 
  />) 
 }

 // forwardRef - декоратор позволяет передавать в inputSeatch ref-параметр
 export default forwardRef(InputSearch);