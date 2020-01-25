import React, {Component} from 'react'


class TodoList extends Component{
   render(){
        return (
         <ul>  
            { this.props.items.map((rec) => (
                <li key={rec.id}>
                  <a 
                   href="#" 
                    onClick={() => this.props.toggle(rec.id)}
                    style={{textDecoration : (rec.done) ? "line-through" : "none" }}
                   >
                         {rec.name}
                   </a>
                   <button onClick={() => this.props.delete(rec.id)}>
                            x
                   </button>
                </li>
               ))}
           </ul>

          
    )
  }   
}



export default TodoList;