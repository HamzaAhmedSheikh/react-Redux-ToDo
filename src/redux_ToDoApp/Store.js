import {
    DELETE_TASK,
    TOGGLE_STATUS,
    CREATE_TASK
  }
    from './Action' 
  
  function task_reducer(state = [], action) {
    // this function will cater all the action related to ToDo Tasks
    
    switch (action.type) {
      // This switch case will check for incoming action's type and perform task accordingly
      case CREATE_TASK:
         return state.concat([action.tasks])

      case TOGGLE_STATUS:
         return state.map((r) =>
               (r.id === action.id)
                ? Object.assign({}, r, { done: !r.done }): r)   

      case DELETE_TASK:
         return state.filter((r) => r.id !== action.id)    
               
      default:
        return state
    }
  }
  
  
export default (task_reducer);