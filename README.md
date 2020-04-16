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
* 1.2.2 使用React开发者工具调试
  * React Developer
* 1.3.1 虚拟DOM
  * React提供了一些API来创建一种 `特别` 的一般js对象. 例如： var element = React.createElement('h1', {id:'myTitle'},'hello')； 上面创建的就是一个简单的虚拟DOM对象
  * 虚拟DOM对象最终都会被React转换为真实的DOM
  * 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界面
* 1.3.2 JSX
  * 全称:  JavaScript XML
  * react定义的一种类似于XML的JS扩展语法: XML+JS
  * 作用: 用来创建react虚拟DOM(元素)对象
  * 用法： var ele = <h1>Hello JSX!</h1>； 注意1: 它不是字符串, 也不是HTML/XML标签； 注意2: 它最终产生的就是一个JS对象
  * 标签名任意: HTML标签或其它标签
  * 标签属性任意: HTML标签属性或其它
  * 基本语法规则： 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析； 遇到以 { 开头的代码，以JS语法解析: 标签中的js代码必须用{ }包含
  * babel.js的作用： 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行： 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理
* 1.3.3 渲染虚拟DOM(元素)
  * 语法:  ReactDOM.render(virtualDOM, containerDOM) 
  * 作用: 将虚拟DOM元素渲染到页面中的真实容器DOM中显示
  * 参数说明：参数一: 纯js或jsx创建的虚拟dom对象； 参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)
* 1.3.4 建虚拟DOM的2种方式
  * 纯JS(一般不用)： React.createElement('h1',  {id:'myTitle'},  title)
  * JSX: <h1 id='myTitle'>{title}</h1>
* 1.3.5 JSX练习： 需求: 动态展示列表数据
  * ![编码](/images/1.png)
  * const arr = [jquery, zeptoo, angular, react全家桶, vue全家桶]
  * { arr.map((name, index) => <li key={index}>{name}</li> }
