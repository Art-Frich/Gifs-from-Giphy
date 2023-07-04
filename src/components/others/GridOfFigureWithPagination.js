import Grid from './Grid';
import PaginationPanel from './PaginationPanel';

export default function GridOfFigureWithPagination({ gifs, currentPage, totalPages, onPageChange }) {
  return (
    <section className='grid-of-figure-with-pagination'>
      <Grid gifs={gifs} />
      <PaginationPanel currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </section>
  );
}
