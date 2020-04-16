This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create React App
* https://reactjs.org/docs/create-a-new-react-app.html
* npx create-react-app my-app
* cd my-app
* npm start
## React Component Lifecycle
* Mounting: （挂载）
  * constructor 
  * componentWillMount (挂载前自动执行）
  * render （渲染时自动执行）
  * componentDidMount  (挂载后自动执行）
* Updating -> 1 props （属性）
  * componentWillReceiveProps
  * shouldComponentUpdate (if true, next; if false, stop) （组件更新前自动执行， 返回的是一个布尔值）
  * componentWillUpdate
  * render
  * componentDidUpdate
* updating -> 2 states（数据）
  * shouldComponentUpdate (if true, next; if false, stop)
  * componentWillUpdate
  * render
  * componentDidUpdate
* Unmounting
  * componentWillUnmount （组件从页面中移除前自动执行）
## React Router
* npm install react-router-dom --save
## 第1章：React入门（React的基本认识）
* 1.1 官网
  * 英文官网: https://reactjs.org/
  * 中文官网: https://doc.react-china.org/
* 1.1.2 介绍描述
  * 用于构建用户界面的 JavaScript 库(只关注于View)
  * note: 之前我们学习了另外一个库，jQuery，是一个函数库，对dom的一个封装测试
  * 由Facebook开源
* 1.1.3 React的特点
  * Declarative(声明式编码)
  * Component-Based(组件化编码)
  * Learn Once, Write Anywhere(支持客户端与服务器渲染)
  * 高效
  * 单向数据流
* 1.1.4 React高效的原因
  * 虚拟(virtual)DOM, 不总是直接操作DOM
  * DOM Diff算法, 最小化页面重绘
* 1.2 React相关js库
  * react.js: React的核心库
  * react-dom.js: 提供操作DOM的react扩展库
  * babel.min.js: 解析JSX语法代码转为纯JS语法代码的库
* 1.2.1 编码
  * ![编码](/images/编码.png)

