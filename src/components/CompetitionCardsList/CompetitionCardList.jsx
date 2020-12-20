//Core
import React from 'react';
//@material-ui
import Grid from '@material-ui/core/Grid'
//Components
import CompetitionCard from '../CompetitionCard';

const CompetitionCardList = () => {
  
  return(
    <Grid 
      container
      direction="row"
      spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <CompetitionCard/>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <CompetitionCard/>
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <CompetitionCard/>
        </Grid>
    </Grid>
  )
}

export default CompetitionCardList;