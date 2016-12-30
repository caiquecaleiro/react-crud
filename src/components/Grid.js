import React, { PropTypes } from 'react';
import Moment from 'moment';

import { Alert } from 'react-bootstrap';
import { types } from '../constants/columnTypes';

function renderRows({ data, objectKey, selectedRow, onRowSelect, cells }) {
  return data.map(object => {
    return (
      <tr 
        key={object[objectKey]} 
        onClick={() => setSelectedRow(object, selectedRow, onRowSelect)} 
        className={`${selectedRow === object ? 'selected-row' : ''}`}>
        {cells.map(cell => {
          return (
            <td key={cell.name}>
              {validateValue(object[cell.value], cell)}
            </td>
          );
        })}
      </tr>
    );
  });
}

function validateValue(value, { type }) {
  switch (type) {
    case types.BOOLEAN:
      return value ? 'Yes' : 'No';
    case types.TIMESTAMP: 
      return value ? Moment(new Date(value)).format('L LTS') : '';
  }
  return value;
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