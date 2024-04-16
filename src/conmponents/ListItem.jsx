import React from 'react'

const ListItem = ({todo, deleteTodo, editTodo}) => {
  return (
    <>
      <li className="list-group-item p-2 my-2 rounded-0">
        <h1 className="display-6">{todo.text} </h1>
        <span className='float-end'>
          <button className="btn btn-warning mx-2 rounded-0" onClick={()=>editTodo(todo)}>Edit</button>
          <button className="btn btn-danger mx-2 rounded-0" onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </span>
      </li>
    </>
  )
}

export default ListItem
