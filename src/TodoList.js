import React, { Component, Fragment } from 'react';
import './TodoList.css'
import './TodoItem'
import TodoItem from './TodoItem';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickValue = this.handleClickValue.bind(this);
    this.state = {
      inputValue: "",
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
    // 这里this的指向是undefied, 通过bind（this）方法，使其指向组件TodoList
    this.setState({
      list: list
    })
  }

  getItemList() {
    // 父子组件的概念
    // 父组件通过属性的形式向子组件传值
    return this.state.list.map((value, index) => {
      return (
        <TodoItem 
          content={value} 
          key={index}
          index={index}
          deleteFunction={this.handleClickValue}
          />
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
