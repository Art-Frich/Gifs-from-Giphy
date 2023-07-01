import './PaginationElement.css'

export default function PaginationElement({ title }){
  return(
    <button className='pagination-element' type="button">
      {title}
    </button>
  ) 
 }