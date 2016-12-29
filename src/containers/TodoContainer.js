import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';

import PageContainer from '../components/PageContainer';
import Portlet from '../components/Portlet';
import TodoForm from '../components/TodoForm';
import { fetchTodo } from '../actions/index';

class TodoContainer extends Component {
  onSubmit() {
    console.log('submitting');
  }

  handleInitialize({ text }) {
    this.props.initialize('todo', {
      text
    });
  }

  componentWillMount() {
    const id = this.props.location.query.id;

    if (id) {
      this.props.fetchTodo(id);   
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    this.handleInitialize(nextProps.todo);
  }

  render() {
    return (
      <PageContainer>
        <Portlet title="Todo">
          <TodoForm onSubmit={this.onSubmit} />
        </Portlet>
      </PageContainer>
    );
  }
}

TodoContainer.propTypes = {
  fetchTodo: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  todo: PropTypes.object
};

function mapStateToProps(state) {
  return { todo: state.todos.todo };
}

export default connect(mapStateToProps, { fetchTodo, initialize })(TodoContainer);