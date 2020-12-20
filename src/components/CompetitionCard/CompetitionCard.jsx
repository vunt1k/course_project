//Core
import React from 'react';
import clsx from 'clsx';
//@material-ui
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: '100%',
    boxShadow: 'none',
    border: '1px solid #cccfd2'
  },
  media: {
    background: '#f2f3f3',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px'
  },
  icon: {
    fontSize: '3rem',
    width: '70px',
    color: '#646462'
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  button: {
    color: 'white',
    "&.MuiButton-root":{
      background: '#ed7916' 
    }
  }
});

const CompetitionCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}> 
          <Icon className={clsx("fas fa-dog", classes.icon)}/>
        </CardMedia>
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Змагання
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button} size="small" variant="contained">
          Переглянути
        </Button>
      </CardActions>
    </Card>
  );
}

export default CompetitionCard;
