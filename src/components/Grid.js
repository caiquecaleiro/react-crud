import React, { PropTypes } from 'react';

import { Alert } from 'react-bootstrap';

function renderRows({ data, objectKey, selectedRow, onRowSelect, cells }) {
  return data.map(object => {
    return (
      <tr 
        key={object[objectKey]} 
        onClick={() => setSelectedRow(object, selectedRow, onRowSelect)} 
        className={`${selectedRow === object ? 'selected-row' : ''}`}>
        {cells.map(cell => <td key={cell.name}>{object[cell.value]}</td>)}
      </tr>
    );
  });
}

function renderHeaderCells({ cells }) {
  return cells.map(cell => <th key={cell.name}>{cell.name}</th>);
}

function setSelectedRow(object, selectedRow, onRowSelect) {
  if (selectedRow === object) {
    object = {};
  }
  onRowSelect(object);
}

function renderAlert({ data }) {
  if (data.length === 0) {
    return (
      <Alert bsStyle="info">
        <strong>Heads up!</strong> There is no record available.
      </Alert> 
    );
  }
}

function Grid(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-scrollable">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                {renderHeaderCells(props)}
              </tr>
            </thead>
            <tbody>
              {renderRows(props)}
            </tbody>
          </table>
        </div>
        {renderAlert(props)}
      </div>
    </div>
  );
}

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  onRowSelect: PropTypes.func.isRequired,
  selectedRow: PropTypes.object.isRequired,
  objectKey: PropTypes.string.isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default Grid;