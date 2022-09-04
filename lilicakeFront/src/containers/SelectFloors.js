import React, { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SelectFloors = ({ minFloor, maxFloor }) => {

  const [floor, setFloor] = useState('')

  let nbPieces = useStoreState(state => state.nbPieces)
  const getSelectedFloors = useStoreActions(actions => actions.getSelectedFloors);

  const arrayFloors = []

  for (let i = minFloor; i <= maxFloor; i++) {
    arrayFloors.push(i)
  }

  const getDisable = (floor, pieces) => {
    if (pieces >= 11) {
      return false
    } else if (pieces >= 9 && floor <= 3) {
      return false
    } else if (pieces >= 7 && floor <= 2) {
      return false
    } else if (pieces >= 5 && floor <= 1) {
      return false
    }
    else {
      return true
    }
  }

  const handleChange = event => {
    setFloor(event.target.value);
    getSelectedFloors(event.target.value)
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup value={floor} onChange={handleChange} classes={{ root: 'rootRadio' }} >
          {
            arrayFloors.map((floor) => {
              return (
                <div key={floor}>
                  <FormControlLabel
                    value={'floor' + floor}
                    control={<Radio />}
                    label={ floor>1 ? floor + ' étages' : floor + ' étage'}
                    labelPlacement="bottom"
                    disabled={getDisable(floor, nbPieces)}
                  />
                </div>
              )
            })
          }
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default SelectFloors;