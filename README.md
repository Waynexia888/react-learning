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
