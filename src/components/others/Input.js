import React, { useEffect } from 'react';
import './Input.css';

export default React.memo(function Input({ 
  placeholder, onChange, value, type, min = '1', max = '50', minLength = '2', maxLength = '100'
}){

  useEffect(()=>{
    console.log(document.activeElement)
  }, [])

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
})