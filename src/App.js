import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    wishes: ["graduate"],
    addedWish: ""
  };

  formRef = React.createRef();

  handleChange = e => {
    const addedWish = e.target.value;
    this.setState({ addedWish });
  };

  deleteWish(dwish) {
    console.log("wish", dwish);
    let oldWishes = this.state.wishes;
    console.log("oldwishes ", oldWishes);
    let newWish = oldWishes.filter(wish => wish !== dwish);
    console.log("new", newWish);
    this.setState(state => ({
      wishes: [newWish],
      addedWish: ""
    }));
  }
  editWish(wish) {
    console.log("edit", wish);
    let oldWishes = this.state.wishes;
    console.log(oldWishes);
    oldWishes[oldWishes.indexOf(wish)] = this.state.addedWish;
    this.setState(state => ({
      wihses: oldWishes
    }));
  }

  addWish = e => {
    e.preventDefault();
    let oldWishes = this.state.wishes;
    this.setState(state => ({
      wishes: [...oldWishes, state.addedWish],
      addedWish: ""
    }));
  };

  render() {
    return (
      <div>
        <h1>Wishes:</h1>
        <ul>
          {this.state.wishes.map(wish => (
            <li>
              {wish}
              <button value={wish} onClick={() => this.deleteWish(wish)}>
                Delete
              </button>

              <input
                type="text"
                onChange={this.handleChange}
                name="addedWish"
              />
              <button onClick={() => this.editWish(wish)}>Edit</button>
            </li>
          ))}
        </ul>

        <label>Add Wish</label>
        <input type="text" onChange={this.handleChange} name="addedWish" />
        <button onClick={this.addWish}>Add</button>
      </div>
    );
  }
}

export default App;
