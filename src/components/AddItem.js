import React, { Component } from 'react';
import AppStore from '../stores/AppStore.js';
import './AddItem.css';
class AddItem extends Component {
   constructor(props){
      super(props);
      this.state = {
         inputValue: ''
      }
   }
   
   render() {
      return (
         <div id="addItem">
            <input type="text" 
               id="input" 
               value={this.state.inputValue} 
               onChange={this.handleChange}
               onKeyPress={this.uniKeyCode}/>
            <button onClick={this.handleAdd}>新增</button>
         </div>
      );
   }
  componentDidMount(){
     document.querySelector("input").focus();
  }

   handleChange = (e)=>{
      this.setState({inputValue: e.target.value});
   }

   handleAdd = ()=>{
      if(this.state.inputValue === ''){
         return;
      }
      AppStore.addTodo(this.state.inputValue);
      this.setState({inputValue: ''});
   }
   uniKeyCode= (event)=>{
      var char = event.which || event.keyCode;
      if(char ===13){
         this.handleAdd();
      }
   }
}

export default AddItem;