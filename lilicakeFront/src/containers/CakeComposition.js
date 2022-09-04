import React from 'react';

import SelectPieces from './SelectPieces';
import SelectFloors from './SelectFloors';
import SelectBase from './SelectBase';

const CakeComposition = ({cake}) => {
   
  return (
    <React.Fragment>
      <h2>Combien de personnes?</h2>
      <SelectPieces pieces={cake.pieces} />
      <h2>Combien d'étages?</h2>
      <SelectFloors minFloor={cake.minFloor} maxFloor={cake.maxFloor}/>
      <h2>Quel parfum pour le biscuit?</h2>
      <SelectBase bases={cake.bases}/>
    </React.Fragment>
  )

}

export default CakeComposition;
