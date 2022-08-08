import "./App.css";
import React, { Component, Fragment } from "react";
import TodoItem from "./components/todoItem";
import AddItem from "./components/addItem";

export default class App extends Component {
  state = {
    items: [
      { id: 1, name: "Ahmed", age: 22 },
      { id: 2, name: "Sara", age: 24 },
      { id: 3, name: "Dina", age: 26 },
      { id: 4, name: "Ali", age: 20 },
      { id: 5, name: "Aya", age: 22 },
    ],
  };
  
  deleteItem = (id) => {
      let items = this.state.items.filter(item => {
        return  item.id !== id
      })
      
      this.setState({items})
  };

  displayItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    if(item.name !== '' && item.age !== '') {
      items.push(item);
      this.setState({items})
    }
    
  }
  render() {
    return (
      <>
        <div className="app d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white fw-bold mb-5">To Do List</h1>
          <TodoItem items={this.state.items} deleteItem={this.deleteItem}/>
          <AddItem displayItem = {this.displayItem}/>
        </div>
      </>
    );
  }
}
