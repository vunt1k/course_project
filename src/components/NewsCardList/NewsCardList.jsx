//Core
import React from 'react';
//@material-ui
import Grid from '@material-ui/core/Grid'
//Components
import NewsCard from '../NewsCard';

const NewsCardList = () => {
  
  return(
    <Grid 
      container
      direction="row"
      spacing={3}>
        <Grid item xs={12} sm={6} lg={5}>
          <NewsCard/>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <NewsCard/>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <NewsCard/>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <NewsCard/>
        </Grid>
    </Grid>
  )
}

export default NewsCardList;
