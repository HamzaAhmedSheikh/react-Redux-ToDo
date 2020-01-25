export const CREATE_TASK = 'CREATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'

export function createTaskAction(task, id) {
  return {
    type: CREATE_TASK,
    tasks: {
      id: generateId(),
      name: task,
      done: false
    },
  }
} 

export function deleteTaskAction(id) {
  return {
    type: DELETE_TASK,
    id,
    
  }
}
export function toggleTaskStatusAction(id) {
  return {
    type: TOGGLE_STATUS,
    id,
  }
}

function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}