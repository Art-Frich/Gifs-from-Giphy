import './PaginationElement.css'

export default function PaginationElement({ title, onClick, curPageIndex, index }){
  return(
    <button 
      className={`pagination-element ${ index === curPageIndex ? 'pagination-element_active' : ''}`} 
      type="button" 
      onClick={ onClick }>
      {title}
    </button>
  ) 
 }