import Figure from './Figure.js';

import './Grid.css';

export default function Grid(){
  const gridElements = [];
  for ( let i = 0; i < 12; i++ ){
    gridElements.push( <Figure key={ i } alt={''} src={''} title={''}/>);
  }

  return(
    <div className='grid'>
      {gridElements}
    </div>
  );
 }