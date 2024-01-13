import React, { useState } from 'react'

function ToDoForm({addToDo}) {
    const [userInput, setUserInput] = useState('')

    const handleInput =(e)=>{
        setUserInput(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(userInput.trim() !== ''){
            addToDo(userInput)
            setUserInput('')
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userInput} onChange={handleInput}/>
        <button className='bg-red-300'>Add ToDo</button>
      </form>
    </div>
  )
}


export default ToDoForm