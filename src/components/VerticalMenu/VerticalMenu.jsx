//Core 
import React from 'react';
import { Link } from 'react-router-dom';
//@material-ui
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
//Instruments
import defaultNavs from '../../routes/navs-default';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const VerticalMenu = () => {
  const classes = useStyles();
  console.log(defaultNavs);

  return(
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {
          defaultNavs.lengh !== 0 ? defaultNavs.map(nav =>{ 
            console.log(nav.to);
            return (
              <ListItem button to={nav.to} key={nav.name} component={Link}>
                <ListItemIcon>{nav.icon}</ListItemIcon>
                <ListItemText primary={nav.name}/>
              </ListItem>
            )}
          ) : <></>
        }
      </List>
      <Divider />
      
      {/* <Divider /> */}
    </div>
  );
}

export default VerticalMenu;