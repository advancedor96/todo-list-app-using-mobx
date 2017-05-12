import {observable, action} from 'mobx';
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


   })
  //  report: action(function(){
 	// 	if (this.todos.length === 0)
	// 		return "<none>";
	// 	return `Next todo: "${this.todos[0].task}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;

  //  })
})


export default AppStore;