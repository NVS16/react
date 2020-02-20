import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: "NVS", age: 23, id: 1, belt: 'black'},
      {name: "ibu", age: 26, id: 2, belt: 'blue'},
      {name: "devi", age: 24, id: 3, belt: 'green'}
    ]
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
        
      </div>
    );
  }
}

export default App;
