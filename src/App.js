import React, { Component, Fragment } from 'react';
import './App.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      inputValue: "hello world",
      list: []
    }
  }

  handleInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      const newList = [...this.state.list, this.state.inputValue];
      this.setState({
        list: newList,
        inputValue: ''
      })
    }
  }

  handleClickValue(index) {
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  getItemList() {
    return this.state.list.map((value, index) => {
      return (
        <li key={index}
          onClick={this.handleClickValue.bind(this, index)}
          dangerouslySetInnerHTML={{__html: value}}
        >
        </li>
      )
    })

  }


  render() {
    return (
      <Fragment>
        <label htmlFor="myinput">请输入内容：</label>
        <input id="myinput"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputValue}
          onKeyUp={this.handleKeyUp}
        />
        <ul>
          {this.getItemList()}
        </ul>

      </Fragment>
    )
  }
}


export default TodoList;
