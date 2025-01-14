import { useState } from "react";
import React from 'react'

const EditTodoForm = ({task,editTask}) => {
  const [value,setValue] = useState(task.task);

  const handleSubmit =(e)=>{
       e.preventDefault();
       if(value){
           editTask(value,task.id);
           setValue('');
       }

  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Update task' value={value} onChange={(e)=>{
            setValue(e.target.value)
        }} />

        <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}

export default EditTodoForm