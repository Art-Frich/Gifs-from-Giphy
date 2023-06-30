import './SearchBtn.css'

export default function SearchBtn({ title }){
  return(
    <button className='search-btn' type="submit">
      {title}
    </button>
  ) 
 }