import { useEffect, useState } from 'react';
import Grid from './Grid';
import PaginationPanel from './PaginationPanel';
import './GridOfFigureWithPagination.css';

export default function GridOfFigureWithPagination({ gifs, gifsState }) {

  const [ gifsOnPage, setGifsOnPage ] = useState( gifsState.cntGifsOnPage );
  const [ curPageIndex, setCurPageIndex ] = useState( 0 );
  const [ cntPages, setCntPages ] = useState( 0 );

  const setPrevPage = () => {
    if (curPageIndex > 0) {
      setCurPageIndex(curPageIndex - 1);
    }
  };
  
  const setNextPage = () => {
    if (curPageIndex < cntPages - 1) {
      setCurPageIndex(curPageIndex + 1);
    }
  };

  useEffect(() => {
    setGifsOnPage( gifsState.cntGifsOnPage );
    setCntPages( Math.ceil( gifs.length / gifsOnPage ) )
  // eslint-disable-next-line
  }, [gifsState])

  return (
    <section className='grid-of-figure-with-pagination'>
      <Grid gifs={gifs} curPageIndex={ curPageIndex } gifsOnPage={ gifsOnPage }/>
      {cntPages 
      ? <PaginationPanel 
        cntPages={ cntPages } 
        curPageIndex={ curPageIndex }
        setNextPage={ setNextPage }
        setPrevPage={ setPrevPage }
        setCurPageIndex={ setCurPageIndex }
        /> 
      : <></>}
    </section>
  );
}
