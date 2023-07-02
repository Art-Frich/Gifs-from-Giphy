import './InputSearch.css';
import { forwardRef } from 'react';

function InputSearch({ placeholder, onChange }, ref ){
  return(<input
    type="text"
    className='search-input'
    placeholder={placeholder}
    onChange={ onChange } 
    ref={ ref } 
  />) 
 }

 // forwardRef - декоратор позволяет передавать в inputSeatch ref-параметр
 export default forwardRef(InputSearch);