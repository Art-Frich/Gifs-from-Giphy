import './PaginationBtnNav.css'

export default function PaginationBtnNav({title, onClick, disabled}){
  return(
    <button className="pagination-btn-nav" type="button" onClick={ onClick } disabled={ disabled }>
      {title}
    </button>
  ) 
 }