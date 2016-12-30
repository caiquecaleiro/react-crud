import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Alert } from 'react-bootstrap';

import PageContainer from '../components/PageContainer';
import Portlet from '../components/Portlet';
import TodoForm from '../components/TodoForm';
import { fetchTodo, createTodo, updateTodo } from '../actions/index';

class TodoContainer extends Component {
  onSubmit(props) {
    if (this.props.todo._id) {
      return this.props.updateTodo(this.props.todo._id, props);
    }
    this.props.createTodo(props);
  }

  handleInitialize({ text, completed }) {
    this.props.initialize('todo', {
      text,
      completed
    });
  }

  componentWillMount() {
    const id = this.props.location.query.id;

    if (id) {
      this.props.fetchTodo(id);   
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handleInitialize(nextProps.todo);
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
        <Portlet title="Todo">
          <div>
            <TodoForm 
              onSubmit={this.onSubmit.bind(this)} 
              disableCompleted={!this.props.todo._id}
            />
          </div>
           {this.renderAlert()}         
        </Portlet>
      </PageContainer>
    );
  }
}

TodoContainer.propTypes = {
  fetchTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  todo: PropTypes.object,
  error: PropTypes.string
};

function mapStateToProps(state) {
  return { 
    todo: state.todos.todo,
    error: state.todos.error
  };
}

export default connect(mapStateToProps, { 
  fetchTodo, 
  createTodo, 
  updateTodo, 
  initialize 
})(TodoContainer);