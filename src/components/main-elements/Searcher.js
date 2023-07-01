import { useState } from 'react';
import InputSearch from './InputSearch';
import SearchBtn from './SearchBtn';
import ClearBtn from './ClearBtn';

import './Searcher.css';

export default function Searcher({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  function handleClear() {
    setQuery('');
    onSearch('');
  }

  return (
    <section className="searcher">
      <form className="searcher__form" onSubmit={handleSubmit}>
        <InputSearch
          placeholder={'Enter your case'}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ClearBtn onClick={handleClear} />
        <SearchBtn />
      </form>
    </section>
  );
}
