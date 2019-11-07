import React from 'react';
import { useStoreState } from 'easy-peasy';

const CakeComposed = ({ price }) => {
  
  const pieces = useStoreState(state => state.nbPieces);
  const piecesLabel = useStoreState(state => state.nbPiecesLabel);
  const floors = useStoreState(state => state.nbFloors);
  
  const getTotalPrice = (pieces, price) => {
    return pieces * price
  }


  return (
    <div>
      <h2>
      Voici votre commande
      </h2>
        <div>
        Un gateau pour {piecesLabel}
        </div>
      <div>
        Composé de {floors}
      </div>
      <div>
        Le biscuit au
      </div>
      <h3>
        Total : {getTotalPrice(pieces, price)} €
      </h3>
    </div>
  )
}

export default CakeComposed;