import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from "./TodoList";
import "antd/dist/antd.css";

import { BrowserRouter, Router, Link, Route } from 'react-router-dom';
import NewButton from './newbutton';


class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/list" component={List} />
          <Route path="/button" component={NewButton} />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
  <Entry />,

  document.getElementById("root")
);

