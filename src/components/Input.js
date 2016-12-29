import React, { PropTypes } from 'react';

function Input({ input, label, type, required, meta: { touched, error, invalid } }) {
  return (
    <div className={`form-group ${required ? 'required' : ''} 
      ${required && touched && invalid ? 'has-danger' : ''}`}>
      <label>{label}</label>
      <input className="form-control" {...input} type={type} />
      <div className="form-control-feedback">
        {required && touched ? error : ''}
      </div>
    </div>
  );
}

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  required: PropTypes.bool
};

export default Input;