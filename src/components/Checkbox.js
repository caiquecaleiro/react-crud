import React, { PropTypes } from 'react';

function Checkbox({ input, label }) {
  return (
    <div className="form-group">
      <label className="mt-checkbox">
        <input {...input} type="checkbox" /> {label}
        <span></span>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;