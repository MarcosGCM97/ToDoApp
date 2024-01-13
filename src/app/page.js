"use client";
import { useState } from "react";
import data from './data.json';
import TodoList from "./components/TodoList";
import ToDoForm from "./components/ToDoForm";


function App() {
  const [toDo, setToDo] = useState(data)

  const onComplete =(id)=>{
    setToDo(toDo.map((list)=>{
      return list.id === Number(id) ? {...list, completed: !list.completed} : {...list};
      })
    )
  }
  const onDeleteItem =(id)=>{
    setToDo([...toDo].filter(list => list.id !== id))
  }

  const addToDo =(newToDo)=>{
    let newItem ={
      id: +new Date(),
      task: newToDo,
      completed: false 
    }

    setToDo([...toDo, newItem])
  }

  return (
    <div className="text-3xl font-bold underline p-200px">
        <ToDoForm addToDo={addToDo} />
        <TodoList 
          toDo={toDo} 
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
    </div>
  );
}

export default App;
