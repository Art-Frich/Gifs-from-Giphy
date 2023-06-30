import InputSearch from "./InputSearch";
import SearchBtn from "./SearchBtn";
import ClearBtn from "./ClearBtn";
import Grid from "./Grid";
import PaginationPanel from "./PaginationPanel";

export default function MainSearch(){
 return(
 <main>
  <section>
    <InputSearch />
    <SearchBtn />
    <ClearBtn />
  </section>
  <section>
    <Grid />
    <PaginationPanel />
  </section>
 </main>) 
}