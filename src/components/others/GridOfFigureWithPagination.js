import Grid from './Grid';
import PaginationPanel from './PaginationPanel';
import './GridOfFigureWithPagination.css';
import { useEffect, useState } from 'react';

export default function GridOfFigureWithPagination({ gifs, gifsState }) {
  const [ gifsOnPage, setGifsOnPage ] = useState( 1 );
  const [ curPageIndex, setCurPageIndex ] = useState( 0 );
  const [ cntPages, setCntPages ] = useState( 0 );

  useEffect(() => {
    setGifsOnPage( gifsState.cntGifsOnPage );
    setCntPages( Math.ceil( gifs.length / gifsOnPage ) )
  // eslint-disable-next-line
  }, [gifsState])
  return (
    <section className='grid-of-figure-with-pagination'>
      <Grid gifs={gifs} curPageIndex={ curPageIndex } gifsOnPage={ gifsOnPage }/>
      <PaginationPanel cntPages={ cntPages } curPageIndex={ curPageIndex }/>
    </section>
  );
}
