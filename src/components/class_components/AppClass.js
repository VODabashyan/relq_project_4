import React, { Component } from 'react';
import './appClass.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []

    }
  }

  updateInput(key, value) {
    //update reaact state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create an item with a unique ID
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy the current list of items
    const list = [...this.state.list];

    //add the new item to the list
    list.push(newItem);

    //update the state and reset the input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    //filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list:updatedList});
  }

  render() {
    return (
      <div className="App">
        Add an Item...
        <br/>
        <input
        type="text" 
        required="required"
        placeholder="Type item here..." 
        value = {this.state.newItem}
        onChange = {e => this.updateInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                   {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                </li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default App;
