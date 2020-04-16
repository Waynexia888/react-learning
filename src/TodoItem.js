import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickValue = this.handleClickValue.bind(this)

    }

    handleClickValue() {
        // 改变父组件中的list数据
        // 子组件想要和父组件通信， 它要调用父组件传递过来的方法
        // this.props.deleteFunction(this.props.index)
        const { deleteFunction, index } = this.props;
        deleteFunction(index);
    }

    render() {
        // 子组件通过this.props的属性，从父组件接收传递过来的值
        const { content } = this.props
        return (
            <li onClick={this.handleClickValue} >{ content }</li>
        )
    }
}

export default TodoItem