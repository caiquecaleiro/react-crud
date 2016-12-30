import React, { PropTypes } from 'react';

function Checkbox({ input, label, disabled }) {
  return (
    <div className="form-group">
      <label className="mt-checkbox">
        <input type="checkbox" disabled={disabled} checked={input.value} {...input} /> 
        {label}
        <span></span>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Checkbox;