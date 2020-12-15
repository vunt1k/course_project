//Core
import React from 'react';
//@material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Components
import NewsCardList from '../../components/NewsCardList';

const NewsPage = () => {
  return (
    <Grid
      container>
        <Typography variant='h4' style={{paddingBottom: '15px'}}>Новини</Typography>
          <NewsCardList/>
    </Grid>
  )
}

export default NewsPage;
