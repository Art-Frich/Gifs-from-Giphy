import GridItem from './GridItem.js';

export default function Grid(){
  const gridElements = [];
  for ( let i = 0; i < 20; i++ ){
    gridElements.push( <GridItem key={ i } />);
  }

  return(
    { gridElements } 
  ) 
 }