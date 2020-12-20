// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
// Components
import FormikInput from '../FormikInput';
import { Button, Grid } from '@material-ui/core';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Za-z0-9.+_-]+@[A-Za-z0-9._-]+\.[a-zA-Z]+$/, {
      message: 'Invalid email address',
      excludeEmptyString: true,
    })
    .required('Required'),
  password: Yup.string().required('Required'),
});

const SignInForm = ({ authError, className }) => {
  const onSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 500);

    console.log('sign in values:', values);
  };

  const emailAuthError = authError && authError.message;
  const passwordAuthError = authError && authError.password;

  const renderForm = values => {
    const form = Object.keys(values).map(key => {
      const type = key === 'password' ? 'password' : 'text';
      const error = key === 'email' ? emailAuthError : passwordAuthError;

      return (
        <FormikInput
          key={key}
          mandatory
          type={type}
          id={key}
          name={key}
          label={key === 'password' ? 'пароль' : 'адреса'}
          value={values[key]}
          apiError={error}
        />
      );
    });

    return form;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}>
      {({ values, handleSubmit, isSubmitting }) => (
        <form className={className} onSubmit={handleSubmit}>
          {renderForm(values)}
          <Grid>
            <Button 
              size="large" 
              variant="contained" 
              color="primary"
              type="submit"
              disabled={isSubmitting}>
                Вхід
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

SignInForm.defaultProps = {
  authError: null,
  className: '',
  onSignIn: () => null,
};

SignInForm.propTypes = {
  authError: PropTypes.shape({}),
  className: PropTypes.string,
  onSignIn: PropTypes.func,
};

export default SignInForm;
