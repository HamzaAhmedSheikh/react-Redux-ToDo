import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
   createTaskAction,
   toggleTaskStatusAction,
   deleteTaskAction 
} from '../Action/Action'


class Task extends Component{

   render(){
       
     const addToDoTask = () => {
       const name = document.getElementById('txt_task')
       const value = name.value
       name.value = '' 
     } 

     const toggle_task = (task_id) => {
        this.props.dispatch(toggleTaskStatusAction(task_id))
     }

     const deleteTask = (task_id) => {
        this.props.dispatch(deleteTaskAction(task_id))
     }

     return(
      <div className='App'>
        <h2> ToDo Task </h2>
           <input 
               type = 'text'
               id = 'txt_task'
               placeholder='Enter ToDo task here....' 
           />

           <button id='addTodo' onClick={addToDoTask}> Add Task to List </button>
           
                    
      </div>
    ) 
  }
}


export default Task;