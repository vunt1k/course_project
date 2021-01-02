// Core
import React from 'react';
import clsx from 'clsx';
// @material-ui
import { Card, CardContent, CardMedia, Icon, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Components
import Wrapper from '../../components/Wrapper';
import SignInForm from '../../components/SignInForm';
// Hooks

const useStyles = makeStyles(theme => {
  return {
    card: {
      width: '40%',
      height: 'auto',
      padding: 0,
      minWidth: '300px',
      boxShadow: 'none',
      border: '1px solid #cccfd2',
      borderRadius: '8px',
    },

    media: {
      fontFamily: 'roboto',
      background: '#f2f3f3',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      fontSize: 24,
      fontWeight: 700,
      color: '#646462',
    },

    icon: {
      fontSize: '3rem',
      width: '70px',
      color: '#646462'
    },

    cardContent: {
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px 16px 0px 16px !important'

    },
    
    form: {  
      position: 'relative',
      width: '100%',
      padding: '20px 20px',
      "& .MuiFormControl-root": {
        paddingBottom: '10px'
      },
      '& .MuiOutlinedInput-root': {
        height: 48,
        '& .MuiInputBase-input': {
          height: '70%'
        },
      }
    }
  };
});

const SignInPage = () => {
  const classes = useStyles();

  const signIn = () => {
    console.Log('Sign In function started');
  }

  return (
    <Wrapper>
      <Card className={classes.card}>
        <CardMedia className={classes.media}> 
          <Icon className={clsx("fas fa-sign-in-alt", classes.icon)}/>
          Кінологічна спілка України
        </CardMedia>
        <Divider />
        <CardContent className={classes.cardContent}>
          <SignInForm
            className={classes.form}
            onSignIn={signIn}
          />
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default SignInPage;
