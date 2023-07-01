import InputSearch from "./InputSearch";
import SearchBtn from "./SearchBtn";
import ClearBtn from "./ClearBtn";
import Grid from "./Grid";
import PaginationPanel from "./PaginationPanel";

import './MainSearch.css';

export default function MainSearch(){
 return(
 <main className="main-search">
  <section className="main-search__search-section">
    <form className="main-search__search-form">
      <InputSearch placeholder={ 'Enter your case' }/>
      <ClearBtn />
      <SearchBtn />
    </form>
  </section>
  <section className="main-search__grid-section">
    <Grid />
    <PaginationPanel />
  </section>
 </main>) 
}