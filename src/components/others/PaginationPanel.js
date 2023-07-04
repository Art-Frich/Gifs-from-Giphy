import PaginationBtnNav from './PaginationBtnNav';
import PaginationElement from './PaginationElement';

import './PaginationPanel.css';

export default function PaginationPanel({
  cntPages, curPageIndex
}) {
  const paginationElements = [];
  for (let i = 1; i <= cntPages; i++) {
    paginationElements.push(
      <PaginationElement
        key={i}
        title={i}
        // onClick={() => onPageChange(i - 1)}
        // isActive={i === currentPage + 1}
      />
    );
  }

  return (
    <div className="PaginationPanel">
      <PaginationBtnNav title={'Назад'} 
      // onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0} 
      />
      {paginationElements}
      <PaginationBtnNav title={'Вперёд'} 
      // onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages - 1} 
      />
    </div>
  );
}
