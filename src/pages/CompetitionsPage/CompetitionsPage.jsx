//Core
import React from 'react';
//@material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Components
import CompetiotionCardList from '../../components/CompetitionCardsList';

const CompetitionsPage = () => {
  return (
    <Grid
      container>
        <Typography variant='h4' style={{paddingBottom: '15px'}}>Змагання</Typography>
        <CompetiotionCardList/>
    </Grid>
  )
}

export default CompetitionsPage;
