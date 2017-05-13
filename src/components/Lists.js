import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import AppStore from '../stores/AppStore.js';

class Lists extends Component {

   render() {
      let todoItems = AppStore.todos.map((o, idx) => {
        let text = o.completed? <s>{o.task}</s> : <span>{o.task}</span>;
          return (
            <div key={o.id}>{text}
              <button onClick={()=>{AppStore.toggleFinish(o)}}>完成/未完成</button>
              <button onClick={()=>{AppStore.modify(o)}}>修改</button>
              <button onClick={()=>{AppStore.delete(o)}}>刪除</button>
          </div>             
          )

      })


      return (
         <div>
            {todoItems}
         </div>
      );
   }
}

export default observer(Lists);