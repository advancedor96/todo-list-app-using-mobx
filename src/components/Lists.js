import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import AppStore from '../stores/AppStore.js';

class Lists extends Component {
   toggleFinish = (o)=>{
      o.completed = !o.completed;
   }
   modify = (o)=>{
      let newValue = prompt('輸入新值:',o.task); 
      if(newValue!==null) {
         o.task = newValue;
      }
   }
   delete = (o)=>{
      AppStore.delete(o);
   }
   render() {
      let todoItems = AppStore.todos.map((o, idx) => {
         if(o.completed){
            return (
              <div key={o.id}><s>{o.task}</s>
               <button onClick={this.toggleFinish.bind(this, o)}>未完成</button>
               <button onClick={this.modify.bind(this, o)}>修改</button>
               <button onClick={this.delete.bind(this, o)}>刪除</button>
            </div>             
            )
         }
         return (
            <div key={o.id}>{o.task}
               <button onClick={this.toggleFinish.bind(this, o)}>完成</button>
               <button onClick={this.modify.bind(this, o)}>修改</button>
               <button onClick={this.delete.bind(this, o)}>刪除</button>
            </div>
         );
      })


      return (
         <div>
            {todoItems}
         </div>
      );
   }
}

export default observer(Lists);