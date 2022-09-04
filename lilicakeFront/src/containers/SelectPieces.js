import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectPieces = ({ pieces }) => {

  const [nbPieces, setNbPieces] = useState('');

  const getSelectedPieces = useStoreActions(actions => actions.getSelectedPieces);

  const handleChange = event => {
    setNbPieces(event.target.value);
    getSelectedPieces(event.target.value)
  };

  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={nbPieces}
        onChange={handleChange}
      >
        {
          pieces.map((item) => {
            return (
              <MenuItem key={item.size} value={item}>
                {item.label}
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default SelectPieces;