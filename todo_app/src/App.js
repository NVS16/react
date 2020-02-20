import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, todo: 'have a haircut'},
      {id: 2, todo: 'kill my ex'},
      {id: 3, todo: 'have a maharaja mac'}
    ]
  };

  delTodo = (tid) => {
    let todos = this.state.todos.filter((td) => {
      return td.id !== tid;
    });
    this.setState({
      todos: todos
    });
  };

  addTodo = (td) => {
    td.id = Math.random();
    let todos = [...this.state.todos, td];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
