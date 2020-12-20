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
      height: '40%',
      padding: 0,
      minWidth: '300px',
      boxShadow: 'none',
      border: '1px solid #cccfd2',
      borderRadius: '8px'
    },

    media: {
      fontFamily: 'roboto',
      background: '#f2f3f3',
      height: '22%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      fontSize: 24,
      fontWeight: 700,
      color: '#646462'
    },

    icon: {
      fontSize: '3rem',
      width: '70px',
      color: '#646462'
    },

    title: {
      margin: '0px -25px 10px',
      padding: '0px 25px',
      fontSize: 23,

      '& div': {
        marginBottom: -4,

        '& span': {
          paddingBottom: 25,
          fontSize: 36,
          fontWeight: 'bold',
          wordWrap: 'normal',
          color: 'var(--navy)',
          lineHeight: 'normal',
        },
      },
    },

    cardContent: {
      height: '70%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    form: {  
      position: 'relative',
      width: '100%',
      padding: '0px 20px',
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
