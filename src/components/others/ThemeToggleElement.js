import './ThemeToggleElement.css';

export default function ThemeToggleElement({ state, setState }){

  function chengeCheckbox(){
    setState( !state );
  }

  return(
    <label className="checkbox">
      <input 
        className="checkbox__input" 
        type="checkbox" 
        checked={ state } 
        onChange={ chengeCheckbox }/>
      <div className="checkbox__container" />
    </label>
  )
}