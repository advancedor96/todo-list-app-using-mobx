import {observable, action} from 'mobx';
import mobx from 'mobx';
import _ from 'lodash';

const uuidV4 = require('uuid/v4');
var AppStore = observable({
   todos : [],
   get completedTodosCount(){
      return this.todos.filter(
			todo => todo.completed === true
		).length; 
   }
});

_.assign(AppStore, {
   addTodo: action(function(task){
      this.todos.push({
         id: uuidV4(),
         task: task,
         completed: false
      });


   }),
   toggleFinish: action((element)=>{
     element.completed = !element.completed;
   }),
   modify: action(function(o){
      let newValue = prompt('輸入新值:', o.task); 
      if(newValue!==null) {
         o.task = newValue;
      }
   }),
   delete: action(function(element){
     //搜尋element在array裡的定位
     let idx = this.todos.indexOf(element);

     if( idx > -1){
     //刪除他
       this.todos.splice(idx , 1);
     }else{
       console.warn('找不到要刪的元素')
     }
   })
  //  report: action(function(){
 	// 	if (this.todos.length === 0)
	// 		return "<none>";
	// 	return `Next todo: "${this.todos[0].task}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;

  //  })
})


export default AppStore;