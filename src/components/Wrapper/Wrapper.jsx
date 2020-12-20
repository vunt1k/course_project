// Core
import React from 'react';
import PropTypes from 'prop-types';
// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: props.maxWidth,
    height: '100vh',
  }),
});

const Wrapper = props => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <Container className={classes.root} disableGutters>
      {children}
    </Container>
  );
};

Wrapper.defaultProps = {
  maxWidth: 1440,
};

Wrapper.propTypes = {
  maxWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
