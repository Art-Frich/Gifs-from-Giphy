import { useRef, useState } from 'react';
import InputSearch from './InputSearch';
import SearchBtn from './SearchBtn';
import ClearBtn from './ClearBtn';
import './Searcher.css';

export default function Searcher({ onSearch }) {
  const [query, setQuery] = useState('');

  const inputRef = useRef();

  function handleSubmit( e ) {
    e.preventDefault();
    onSearch( query );
  }

  function handleClear() {
    setQuery('');
    inputRef.current.value = '';
  }

  return (
    <section className="searcher">
      <form className="searcher__form" onSubmit={handleSubmit}>
        <InputSearch
          placeholder={'Enter your case'}
          onChange={( e ) => setQuery( e.target.value )}
          ref={ inputRef }
        />
        <ClearBtn onClick={ handleClear } />
        <SearchBtn />
      </form>
    </section>
  );
}
