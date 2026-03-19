import { useState } from 'react'
import { NewTodoForm } from './NewTodoForm.tsx'
import { TodoList } from './TodoList.tsx'
import type { Task } from './Types.tsx'
import './reset.css'
import './style.css'



export default function App() {
  const [todos, setTodos] = useState<Task[]>([])

  function addTodo(title : string) {
    const newTask : Task = { 
      id: crypto.randomUUID(), 
      name: title, 
      isCompleted: false, 
      createdTime: new Date()
    }

    setTodos(currentTodos => {
        return [...currentTodos, newTask];
    });
  }

  function toggleTodo(id : string, isCompleted : boolean) {
    setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            return {...todo, isCompleted};
          }
          return todo;
        })
    });
  }

  function deleteTodo(id : string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    });
  }

  return <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList list={todos}/>
  </> 
}
