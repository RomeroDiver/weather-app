import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const errors = {
  404: 'The city cannot be found, please try again'
}

export default class ErrorHandler extends Component {
  static propTypes = {
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    dismissError: PropTypes.func.isRequired,
  }

  getErrorMessage = () => {
    const { error } = this.props;
    return errors[error];
  }

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!this.props.error}
        autoHideDuration={6000}
        onClose={this.props.dismissError}
        message={<span>{this.getErrorMessage()}</span>}
        action={
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.props.dismissError}
          >
            <CloseIcon />
          </IconButton>
        }
      />
    )
  }
}
