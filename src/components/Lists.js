import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import AppStore from '../stores/AppStore.js';

class Lists extends Component {
   toggleFinish = (o)=>{
   }
   render() {
      let todoItems = AppStore.todos.map((o, idx) => {
         return (
            <div key={o.id}>{o.task} 完成與否:{o.completed? '完成' : '未完成'}
               <button onClick={()=>{o.completed = !o.completed;}}>完成</button>
               {/*<button onClick={()=>{let newValue = prompt('輸入新值:',o.task); if(newValue!==null) o.task = newValue;}}>修改</button>
               <button onClick={this.delete}>刪除</button>*/}
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