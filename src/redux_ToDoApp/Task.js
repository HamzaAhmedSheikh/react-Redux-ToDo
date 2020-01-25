import React, { Component } from 'react'
import { connect } from 'react-redux'
 import TodoList from './List'
 import {
   toggleTaskStatusAction,
   deleteTaskAction,
   createTaskAction
 } from './Action'

class Task extends Component {
         
  render() {
       
    const addToDoTask = () => {
    const name = document.getElementById("txt_task")
    const value = name.value
    name.value = ''

        this.props.dispatch(createTaskAction(value))
     }

     const toggle_task = (task_id) => {
       this.props.dispatch(toggleTaskStatusAction(task_id))  
     }


      const deleteTask = (task_id) => {
        this.props.dispatch(deleteTaskAction(task_id))
     }
                    
                  
  return (
   <div>
     <h2>ToDo Task</h2>
       <input
           type="text"
           id="txt_task"
           placeholder="Enter ToDo task here..."
          />
         
        <button id="addTodo" onClick={addToDoTask}>Add Task to List</button>

          <TodoList items={this.props.tasks}
                   toggle={toggle_task}
                   delete={deleteTask}
        /> 

   </div>
  )
 }
}



export default connect((state) => ({
  tasks: state.tasks
}))(Task)