import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const SelectBase = ({ bases }) => {

  const [base, setBase] = useState('')

  const handleChange = event => {
    console.log(event.target.value)
    setBase(event.target.value)
  }
  console.log(bases)
  return (
    <div>
      <Tabs value={base} exclusive onChange={handleChange} >
        {
          bases.map((base) => {
            return (
              <Tab key={base.key} value={base.label} label={base.label} />
            )
          })
        }
      </Tabs>
    </div>
  )
}

export default SelectBase;