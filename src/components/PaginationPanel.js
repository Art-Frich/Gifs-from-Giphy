import PaginationBtnNav from "./PaginationBtnNav";
import PaginationElement from "./PaginationElement";

export default function PaginationPanel(){
  const paginationElements = [];
  for (let i = 1; i <= 8; i++) {
    paginationElements.push(<PaginationElement key={i} />);
  }

  return(<>
    <PaginationBtnNav>Назад</PaginationBtnNav>
    {paginationElements}
    <PaginationBtnNav>Вперёд</PaginationBtnNav>
  </>) 
 }