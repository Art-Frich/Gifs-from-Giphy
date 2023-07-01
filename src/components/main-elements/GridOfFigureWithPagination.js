import Grid from "./Grid";
import PaginationPanel from "./PaginationPanel";

import './GridOfFigureWithPagination.css';

export default function GridOfFigureWithPagination(){
  return(
  <section className="grid-of-figure-with-pagination">
    <Grid />
    <PaginationPanel />
  </section>
  )
}