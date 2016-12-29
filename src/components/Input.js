import React, { PropTypes } from 'react';

function Input({ input, label, type }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" {...input} type={type} />
    </div>
  );
}

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;