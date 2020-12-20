// Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useField } from 'formik';
import InputMask from "react-input-mask";
// @material-ui
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = withStyles({
  root: {
    marginTop: 10,
    marginBottom: 10,

    '& label': {
      fontSize: 14,
      textTransform: 'capitalize',
      color: '#9a9ea4',
      transform: 'none',
      top: '-20px',
      pointerEvents: 'auto',
      '& span.fa': {
        display: 'inline',
      },
    },
    '& .MuiInputBase-input': {
      padding: '6px 12px',
      color: '#020d1c',
    },
    '& .MuiOutlinedInput-root': {
      position: 'relative',
      height: 32,
      padding: 0,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: 'normal',
      '& fieldset': {
        borderColor: '#cccfd2',
      },
      '&:focus': {
        borderColor: '#183f73',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: '#183f73',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#183f73',
        border: '1px solid',
        borderWidth: 1,
      },
      '&.Mui-disabled': {
        background: '#f3f4f5',
        '& fieldset': {
          borderColor: '#cccfd2',
        },
        '&:hover fieldset': {
          borderColor: '#cccfd2',
        },
      },
    },
    '& .MuiFormHelperText-contained': {
      margin: '2px 12px 3px',
    },
  },
})(TextField);

const useStyles = makeStyles({
  startAdornment: {
    marginRight: 36,
  },

  openedEye:{
    color: '#183f73'
  },

  endAdornmentCustom: {
    backgroundColor: '#f3f4f5',

    '& .fa': {
      color: '#9a9ea4',

      '&.fa-pwd': {
        width: '25px',
        height: 'auto',
        fontSize: '10px',
      },
    },
  },

  endAdornmentCustomPwd: {
    borderLeft: 'none',
    '& .fa': {
      color: '#9a9ea4',

      '&.fa-pwd': {
        width: '25px',
        height: 'auto',
        fontSize: '10px',

        '& .MuiSvgIcon-root': {
          fontSize: '1.1rem'
        }
      },
    },
  },
});

const iconStyles = {
  selectIcon: {
    position: 'absolute',
    right: 15,
    top: 'calc(50% - 10px)',
    width: '10px',
    fontSize: 14,
    '&.MuiSelect-iconOpen': {
      top: 'calc(50% - 5px)',
    },
  },
};

const customizedSelectArrowIcon = withStyles(
  iconStyles,
)(({ className, classes, ...rest }) => (
  <Icon
    {...rest}
    className={classnames("fa fa-sort-down", className, classes.selectIcon)}
  />
));

const FormikInput = ({
  id,
  type,
  name,
  select,
  label,
  disabled,
  mandatory,
  mask='',
  placeholder,
  customAdornment,
  style,
  apiError,
  children,
  className="",
  onChange,
  hint=""
}) => {
  const classes = useStyles();
  const [field, meta] = useField(name);
  const [showValue, setShowValue] = useState(type !== 'password');
  function handleShowPassword() {
    setShowValue(!showValue);
  }

  const inputType = (type === 'search') ? 'search' : (showValue ? 'text' : 'password');
  const inputDisabled =
    disabled || (select && children && children.length === 0);
  const error = meta.error && meta.touched;

  const helperText = error ? meta.error : <></>;

  const startAdornment = (type === 'search') && (
    <InputAdornment position="start">
        <Icon className="fa fa-search" />
    </InputAdornment>
  );

  const endAdornment =
    type === 'password' ? (
      <InputAdornment position="end" classes={{ positionEnd: classes.endAdornmentCustomPwd }}>
        <Icon className="fa fa-pwd" onClick={handleShowPassword}>
          {showValue ? <Visibility className={classes.openedEye}/> : <VisibilityOff />}
        </Icon>
      </InputAdornment>
    ) : customAdornment ? (
      <InputAdornment position="end" classes={{ positionEnd: classes.endAdornmentCustom }}>
        <Icon className={"fa fa-" + customAdornment} />
      </InputAdornment>
    ) : null;

  const drawHint = hint && (
    <Tooltip color="primary" title={hint}
      arrow={true} interactive={false}>
        <Icon className="fa fa-info-circle fa-sm" />
    </Tooltip>
  );

  if (mask && mask !== '') {
    return (
      <InputMask
        mask={mask}
        maskChar="_"
        {...field}
      >{() =>
        <Input
          fullWidth
          id={id}
          type={inputType}
          select={select}
          disabled={inputDisabled}
          variant="outlined"
          label={
            <div>
            {label + (mandatory ? ' * ' : ' ')}
            {drawHint}
            </div>
          }
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          error={!!apiError || error}
          {...field}
          className={className}
          SelectProps={{
            IconComponent: customizedSelectArrowIcon,
          }}
          InputProps={{
            startAdornment,
            endAdornment,
          }}
          InputLabelProps={{
            style: { pointerEvents: "auto" },
            disableAnimation: true,
            shrink: false,
          }}
          helperText={apiError || helperText}>
          {children}
        </Input>
      }
      </InputMask>
    );
  }

  return (
    <Input
      fullWidth
      id={id}
      type={inputType}
      select={select}
      disabled={inputDisabled}
      variant="outlined"
      label={
        <div>
        {label + (mandatory ? ' * ' : ' ')}
        {drawHint}
        </div>
      }
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      error={!!apiError || error}
      {...field}
      className={className}
      SelectProps={{
        IconComponent: customizedSelectArrowIcon,
      }}
      InputProps={{
        startAdornment,
        endAdornment,
      }}
      InputLabelProps={{
        style: { pointerEvents: "auto" },
        disableAnimation: true,
        shrink: false,
      }}
      helperText={apiError || helperText}>
      {children}
    </Input>
  );
};

FormikInput.defaultProps = {
  type: 'text',
  disabled: false,
  mandatory: false,
  placeholder: '',
  customAdornment: '',
  children: null,
  onChange: () => null,
  hint: '',
};

FormikInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  customAdornment: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  onChange: PropTypes.func,
  hint: PropTypes.string,
};

export default FormikInput;
