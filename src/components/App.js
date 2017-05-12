import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';
import AddItem from './AddItem.js';
import Lists from './Lists.js';


class App extends Component {
  render() {
    return (
      <div>

        <AddItem />
        <Lists />
        已完成事項：{AppStore.completedTodosCount}/{AppStore.todos.length}
      </div>
    );
  }
}

export default observer(App);
