import React, { useEffect, useState } from 'react'

const Form = ({saveTodo, edit, updatetodo}) => {
  

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
      updatetodo(edit.todo.id, text)
    }else{
      saveTodo(text);
    }
    setText("")
  };


 useEffect(() => {
  setText(edit.todo.text);
 },[edit])




  return (
    <>
     <form onSubmit={(e)=> handleSubmit(e)} > 
      
      <input type="text" 
      placeholder='Enter Text here'
      className='w-100 form-control rounded-0 p-2'
      onChange={(e)=>setText(e.target.value)}
      value={text}
      required
      />

      <button className="btn btn-success w-100 my-2 rounded-0 fw-bold">Save</button>

      </form> 
    </>
  )
}

export default Form
