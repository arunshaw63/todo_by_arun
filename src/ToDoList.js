import React from 'react'

export default function ToDoList({itemval,onSelect,id}) {
    
    return (
        <div className="todo_style">
        <i onClick={()=>{onSelect(id)}} className="fa fa-times" aria-hidden="true" />
          <li>{itemval}</li> 
    </div>
    )
}
