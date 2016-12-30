import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import Grid from '../components/Grid';
import Portlet from '../components/Portlet';
import CrudButtons from '../components/CrudButtons';
import PageContainer from '../components/PageContainer';
import { todoCells } from '../constants/todoCells';
import { fetchTodos, deleteTodo } from '../actions/index';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: {}
    };

    this.onNew = this.onNew.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchTodos();
  }
  
  onRowSelect(selectedRow) {
    this.setState({ selectedRow }, () => {
      console.log(this.state.selectedRow)
    });
  }

  onNew() {
    this.context.router.push('/todo');
  }

  onEdit() {
    this.context.router.push({
      pathname: '/todo',
      query: { id: this.state.selectedRow._id }
    });
  }

  onDelete() {
    this.props.deleteTodo(this.state.selectedRow);
    this.setState({ selectedRow: {} });
  }

  renderAlert() {
    if (this.props.error) {
      return (      
        <div className="margin-top-25px">
          <Alert bsStyle="danger">
            <strong>Oops!</strong> {this.props.error}
          </Alert>
        </div>
      );
    }
  }

  render() {
    return (
      <PageContainer>
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
      </PageContainer>
    );
  }  
}

TodoListContainer.propTypes = {
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

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoListContainer);