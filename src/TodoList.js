import React, { Component } from 'react';
import MyListItem from './MyListItem';
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['First', 'Second', 'Third'],
    };
    this.onDelete = this.onDelete.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  render() {
    return (
      <div className="listBox">
        <ul>
          <h2>Todo List</h2>
          {this.state.todos.map((todo, index) => {
            return <MyListItem value={todo} key={index} myKey={index} onDelete={this.onDelete}/>;
          })}
          <form onSubmit={this.addItem}>
            <input type='text' id='formVal'></input>
            <button type="button" onClick={this.addItem}>Click here</button>
          </form>
        </ul>  
      </div>
    );
  }
  addItem(event) {
    event.preventDefault();
    const copyState = this.state.todos;
    if (document.getElementById('formVal').value !== '') {
      copyState.push(document.getElementById('formVal').value);
      this.setState({
        todos: copyState
      });
      document.getElementById('formVal').value = '';
    }
  }
  onDelete(toDelete) {
    const newTodos = this.state.todos.filter((item) => {
      return toDelete !== item;
    });
    this.setState({
      todos: newTodos
    });
  }

}


export default TodoList;