import React, { PropTypes } from 'react';

function Alert(props) {
  return (
    <div className="alert alert-danger">
      <strong>Oops!</strong> {props.message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired
}

export default Alert;