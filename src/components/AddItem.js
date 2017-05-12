import React, { Component } from 'react';
import AppStore from '../stores/AppStore.js';

class AddItem extends Component {
   constructor(props){
      super(props);
      this.state = {
         inputValue: ''
      }
   }
   handleChange = (e)=>{
      this.setState({inputValue: e.target.value});
   }

   handleAdd = ()=>{
      AppStore.addTodo(this.state.inputValue);
      this.setState({inputValue: ''});
   }


   render() {
      return (
         <div>
            <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}>新增</button>
         </div>
      );
   }
}

export default AddItem;