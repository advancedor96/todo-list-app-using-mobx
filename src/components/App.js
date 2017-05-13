import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';
import AddItem from './AddItem.js';
import Lists from './Lists.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1 id="title">萬年to do list</h1>
        <AddItem />
        <Lists />
        已完成事項：{AppStore.completedTodosCount}/{AppStore.todos.length}
      </div>
    );
  }
}

export default observer(App);
