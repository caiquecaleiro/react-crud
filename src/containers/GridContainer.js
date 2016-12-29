import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import Portlet from '../components/Portlet';
import CrudButtons from '../components/CrudButtons';
import Alert from '../components/Alert';
import { todoCells } from '../constants/todoCells';
import { fetchTodos, deleteTodo } from '../actions/index';

class GridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: {}
    };

    this.onNew = this.onNew.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchTodos();
  }
  
  onRowSelect(selectedRow) {
    this.setState({ selectedRow }, () => {
      console.log(this.state.selectedRow)
    });
  }

  onNew() {
    console.log('new');
  }

  onEdit() {
    console.log('edit');
  }

  onDelete() {
    this.props.deleteTodo(this.state.selectedRow);
    this.setState({ selectedRow: {} });
  }

  renderAlert() {
    if (this.props.error) {
      return (      
        <div className="margin-top-25px">
          <Alert message={this.props.error} />
        </div>
      );
    }
  }

  render() {
    return (
      <Portlet title="Todos">
        <div className="row">
          <div className="col-md-12">
            <Grid 
              data={this.props.todos} 
              cells={todoCells}
              onRowSelect={this.onRowSelect.bind(this)}
              selectedRow={this.state.selectedRow}
              objectKey="_id" 
            />
            <CrudButtons 
              onNew={this.onNew} 
              onEdit={this.onEdit} 
              onDelete={this.onDelete}
              editDisabled={!this.state.selectedRow._id}
              deleteDisabled={!this.state.selectedRow._id} 
            />
            {this.renderAlert()}          
          </div>
        </div>
      </Portlet>
    );
  }  
}

GridContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  error: PropTypes.string
}

function mapStateToProps(state) {
  return { 
    todos: state.todos.all,
    error: state.todos.error
  };
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(GridContainer);