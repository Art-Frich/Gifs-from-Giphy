import './PaginationBtnNav.css'

export default function PaginationBtnNav({title}){
  return(
    <button className="pagination-btn-nav" type="button">
      {title}
    </button>
  ) 
 }