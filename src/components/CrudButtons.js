import React, { PropTypes } from 'react';

function CrudButtons(props) {
  return (
    <div>
      {!props.onNew ? '' : 
        <button className="btn btn-primary" 
          onClick={props.onNew}
          disabled={props.newDisabled}>
          New
        </button> 
      }
      {!props.onEdit ? '' : 
        <button className="btn btn-success" 
          onClick={props.onEdit} 
          disabled={props.editDisabled}>
          Edit
        </button>
      }
      {!props.onDelete ? '' :
        <button className="btn btn-danger" 
          onClick={props.onDelete} 
          disabled={props.deleteDisabled}>
          Delete
        </button>
      }
    </div>
  );
}

CrudButtons.propTypes = {
  onNew: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  newDisabled: PropTypes.bool,
  editDisabled: PropTypes.bool,
  deleteDisabled: PropTypes.bool
}

export default CrudButtons;