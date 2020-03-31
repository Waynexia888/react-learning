import React, { Component, Fragment } from 'react';
import './TodoList.css'
import './TodoItem'
import TodoItem from './TodoItem';
import Child from './child';
import LifeCycle from './lifecycle';
import axios from 'axios';
import { Button } from "antd";
import { List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];


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
    };
  }

  handleInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      const newList = [...this.state.list, this.state.inputValue];
      this.setState({
        list: newList,
        inputValue: ""
      });
    }
  }

  handleClickValue(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    // 这里this的指向是undefied, 通过bind（this）方法，使其指向组件TodoList
    this.setState({
      list: list
    });
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
      );
    });
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
    this.setState(
      () => {
        return {
          counter: newCounter
        };
      },
      () => {}
    );
  }

  ////////////////////////////////
  // handleClick() {
  //    console.log("window click");
  // }

  // componentWillMount() {
  //   window.addEventListener("click", this.handleClick)
  // }
  ////////////////////////////////////////////////
  
  // render函数是一个react中的生命周期函数
  render() {
    console.log(this.props.match.params.id);
    // 当组件初次创建的时候， render函数会被执行一次
    // 当state数据发生变更的时候， render函数会被重新执行
    // 当props数据发生变更的时候， render函数会被重新执行
    return (
      <Fragment>
        <label htmlFor="myinput">请输入内容：</label>
        <input
          id="myinput"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputValue}
          onKeyUp={this.handleKeyUp}
        />
        <ul>{this.getItemList()}</ul>

        <Button
          type="primary" // 引用ant design 组件样式
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20
          }}
          onClick={this.handleCount}
          // ref 写在html标签上，获取的是dom节点
          // ref={(button) => {this.buttonElem = button}}
        >
          增加
        </Button>
        {/* <div>{this.state.counter}</div> */}
        <Child
          number={this.state.counter}
          // ref写在组件标签上，获取的是组件的js实例
          ref={child => {
            this.childElem = child;
          }}
        />

        <div>
          <LifeCycle />
        </div>

        <List
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20
          }}
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    );
  }

  // componentDidMount() {
  //   window.addEventListener("click", () => {
  //     console.log("window click");
  //   });
  // }
////////////////////////////////////

//   componentWillUnmount() {
//     window.removeEventListener("click", this.handleClick)
//   }

//////////////////////////////////////////
// $.ajax 请求获取数据的时候，需要引用axios这个工具，以及生命周期函数，
// 来实现远程数据接口这个功能
  // componentDidMount() {
  //   const promise = axios.get('http://www.dell-lee.com/react/api/demo.json')
  //   promise.then((res) => {
  //     console.log(res.data);
  //   })
  // }
}



export default TodoList;
