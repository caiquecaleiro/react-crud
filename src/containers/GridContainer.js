import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import Portlet from '../components/Portlet';
import { todoCells } from '../constants/todoCells';
import { fetchTodos } from '../actions/index';

class GridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: {}
    };
  }

  componentWillMount() {
    this.props.fetchTodos();
  }
  
  onRowSelect(selectedRow) {
    this.setState({ selectedRow }, () => {
      console.log(this.state.selectedRow)
    });
  }

  render() {
    return (
      <Portlet title="Todos">
        <Grid 
          data={this.props.todos} 
          cells={todoCells}
          onRowSelect={this.onRowSelect.bind(this)}
          selectedRow={this.state.selectedRow}
          objectKey="_id"
        />
      </Portlet>
    );
  }  
}

GridContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { todos: state.todos.all };
}

export default connect(mapStateToProps, { fetchTodos })(GridContainer);