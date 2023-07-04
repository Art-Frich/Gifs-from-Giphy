import { useRef } from 'react';
import Input from './Input';
import SearchBtn from './SearchBtn';
import ClearBtn from './ClearBtn';
import './Searcher.css';

export default function Searcher({ onSearch, setQuery, query, setGifs }) {
  const inputRef = useRef();

  function handleSubmit( e ) {
    e.preventDefault();
    onSearch( query, setGifs );
  }

  function handleClear() {
    setQuery('');
    setGifs( [] );
    inputRef.current.value = '';
  }

  function onChange( e ){
    setQuery( e.target.value )
  }

  return (
    <section className="searcher">
      <form className="searcher__form" onSubmit={handleSubmit}>
        <Input
          placeholder={'Enter your case'}
          value={ query }
          onChange={ onChange }
          ref={ inputRef }
        />
        <ClearBtn onClick={ handleClear } />
        <SearchBtn />
      </form>
    </section>
  );
}
