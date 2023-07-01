import InputSearch from "./InputSearch";
import SearchBtn from "./SearchBtn";
import ClearBtn from "./ClearBtn";

import './Searcher.css';

export default function Searcher(){
 return(
  <section className="searcher">
    <form className="searcher__form">
      <InputSearch placeholder={ 'Enter your case' }/>
      <ClearBtn />
      <SearchBtn />
    </form>
  </section>
 )
}