import PaginationBtnNav from "./PaginationBtnNav";
import PaginationElement from "./PaginationElement";

import './PaginationPanel.css';

export default function PaginationPanel(){
  const paginationElements = [];
  for (let i = 1; i <= 8; i++) {
    paginationElements.push(<PaginationElement key={i} title={i} />);
  }

  return(<div className="PaginationPanel">
    <PaginationBtnNav title={'Назад'}/>
    {paginationElements}
    <PaginationBtnNav title={'Вперёд'}/>
  </div>) 
 }