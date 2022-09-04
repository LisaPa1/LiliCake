import { action } from 'easy-peasy';

export default {
  nbPieces: 0,
  nbPiecesLabel: '...',
  nbFloors: '...',

  //Actions 
  getSelectedPieces: action((state, value) => {
    console.log('value', value)
    state.nbPieces = value.size;
    state.nbPiecesLabel = value.label;
  }),
  getSelectedFloors: action((state, value) => {
    const floor = value.replace(/\D/g, '')
    state.nbFloors = floor>1 ? floor + ' étages' : floor + ' étage'
  })
}