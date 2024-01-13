import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({toDo, onComplete, onDeleteItem}) {
  return (
    <div>
      {
        toDo.map((list, id) =>(
            <ToDoItem 
                key={id} 
                toDo={list} 
                onComplete={onComplete} 
                onDeleteItem={onDeleteItem}
            />
        ))
      }
    </div>
  )
}


export default TodoList