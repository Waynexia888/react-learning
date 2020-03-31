import React, { Component, Fragment } from 'react';
import './TodoList.css'
import './TodoItem'
import TodoItem from './TodoItem';
import Child from './child';

//在react中，生命周期函数指的是组件在某一时刻会自动执行的函数


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickValue = this.handleClickValue.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.state = {
      inputValue: "",
      list: [],
      counter: 1
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

  handleCount() {
    // console.log(this.buttonElem.clientTop)
    // console.log(this.childElem)
    const newCounter = this.state.counter + 1;
    // setState是异步的
    // this.setState({
    //   counter: newCounter
    // })
    // 等价于：
    this.setState(() => {
      return {
        counter: newCounter
      };
    }, () => {

    })
  }

// render函数是一个react中的生命周期函数
  render() {
    // 当组件初次创建的时候， render函数会被执行一次
    // 当state数据发生变更的时候， render函数会被重新执行
    // 当props数据发生变更的时候， render函数会被重新执行
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

        <button 
          onClick={this.handleCount}
          // ref 写在html标签上，获取的是dom节点
          // ref={(button) => {this.buttonElem = button}}
          >增加</button>
        {/* <div>{this.state.counter}</div> */}
        <Child 
          number={this.state.counter}
          // ref写在组件标签上，获取的是组件的js实例
          ref={(child) => {this.childElem = child}}
          />

      </Fragment>
    )
  }
}


export default TodoList;
