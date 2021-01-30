import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';




const App = () => {
  const [todoList, setTodoLists] = useState([])

  const handler = (valorDelInput) => {
    console.log("Valor del input:", valorDelInput)
    //  const array = [1,2,3,4] 
    setTodoLists([...todoList, valorDelInput ]);
     
  }
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div>
        <TodoList todoListArray={todoList}/>
      </div>
      <div>
        <AddTodo handleAddTodo={handler} />
      </div>
    </div>
  )

} 

export default App