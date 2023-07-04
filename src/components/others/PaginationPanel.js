import PaginationBtnNav from './PaginationBtnNav';
import PaginationElement from './PaginationElement';

import './PaginationPanel.css';

export default function PaginationPanel({
  cntPages, curPageIndex, setPrevPage, setNextPage, setCurPageIndex
}) {
  const paginationElements = [];
  for (let i = 1; i <= cntPages; i++) {
    paginationElements.push(
      <PaginationElement
        key={i}
        title={i}
        index={ i - 1 }
        curPageIndex={ curPageIndex }
        onClick={ () => setCurPageIndex( i - 1 ) }
      />
    );
  }

  return (
    <div className="PaginationPanel">
      <PaginationBtnNav title={'Назад'} 
        onClick={ setPrevPage } 
        disabled={ curPageIndex === 0 } 
      />
      {paginationElements}
      <PaginationBtnNav title={'Вперёд'} 
        onClick={ setNextPage } 
        disabled={ curPageIndex === cntPages - 1} 
      />
    </div>
  );
}
