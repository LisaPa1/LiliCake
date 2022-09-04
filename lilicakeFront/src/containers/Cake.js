import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import { routesBack } from '../config/config';
import CakeComposition from './CakeComposition';
import CakeComposed from './CakeComposed';

const Cake = () => {

  const [cake, setCake] = useState();

  useEffect(() => {
    axios.get(routesBack.cake.url)
      .then(res => res.data)
      .then(json => {
        setCake(json)
      })
      .catch(er => console.log(er));
  }, [])


  if (!cake) {
    return null
  }


  return (
    <Grid container spacing={10}>
      <Grid item lg={6} xs={12}>
        <CakeComposition cake={cake} />
      </Grid>
      <Grid item lg={6} xs={12}>
        <CakeComposed price={cake.pricePerPiece} />
      </Grid>
    </Grid>
  )

}

export default Cake;