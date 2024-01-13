import React from 'react'


export default function ToDoItem({toDo, onComplete, onDeleteItem}) {

    const getStyle =()=>{
        return {
            textDecoration: toDo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgrondcolor: '#ccf7e3'
        }
    }

  return (
    <div style={getStyle()}>
        <input 
          type='checkbox' 
          checked={toDo.completed} 
          onChange={()=> onComplete(toDo.id)} />
        {toDo.task}
        <button className='bg-red-500 m-5 p-1' onClick={()=> onDeleteItem(toDo.id)}>X</button>
    </div>
  )
}
