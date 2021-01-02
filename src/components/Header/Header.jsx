//Core
import React from 'react';
//@material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between"
    },
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  buttons: {
    textDecoration: 'none',
    color: 'white'
  },
  header: {
    display:"flex",
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  actionButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row'
    },
  }
}));

const Header = ({openMenu}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid
          container
          direction="row">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={openMenu}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <span className={classes.header}>
              <Typography variant="h6" noWrap>
                Кінологічна спілка України
              </Typography>
              <span className={classes.actionButtons}>
                <Link to='/' className={classes.buttons}>
                  <Button color="inherit">Вхід</Button>  
                </Link>
                <Button color="inherit">Реєстрація</Button>
              </span>
            </span>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header;