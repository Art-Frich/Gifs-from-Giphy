import { useEffect, useState } from 'react';
import './ThemeToggleElement.css';

export default function ThemeToggleElement({ onClick }){

  return(
    <label className="checkbox">
      <input class="checkbox__input" type="checkbox" onChange={ onClick }/>
      <div class="checkbox__container" />
    </label>
  )
}