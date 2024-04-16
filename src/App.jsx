import React, { useState } from 'react'
import Navbar from './conmponents/Navbar'
import Form from './conmponents/Form'
import ListGroup from './conmponents/ListGroup'

const App = () => {


  const [todos, setTodos]  = useState([]);
  const [edit, setEdit]   = useState({
    todo:{},
    editMode:false,
  })

  const deleteTodo = (id) => {
    setTodos( todos.filter((todo)=> todo.id !== id  ));
  }


  const saveTodo = (text) => {
    const newTodo = {
      id:crypto.randomUUID(),
      text,
    }


    setTodos([newTodo, ...todos])
  
  }


  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      editMode:true,
    })
    console.log(oldTodo)
  }



  const updatetodo =  (oldId, newText) => {
    setTodos(
      todos.map((item) =>
        item.id === oldId ? { id: oldId, text: newText } : item
      )
    );

    setEdit({
      todo: {},
      editMode: false,
    });
  }




  return (
    <>
      <Navbar todos={todos}/>
      <div className="container p-5">
        <Form saveTodo={saveTodo} edit={edit} updatetodo={updatetodo} />
        <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </>
  )
}

export default App
