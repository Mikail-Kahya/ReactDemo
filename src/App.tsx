import { useState, type ChangeEvent } from 'react'
import { NewTodoForm } from './NewTodoForm.tsx'
import type { Task } from './Types.tsx'
import './reset.css'
import './style.css'



export default function App() {
  const [newItem, setNewItem] = useState("");
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
    <ul className='list'>
      { todos.length === 0 && "No Todos" }
      { todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input  type="checkbox" 
                      checked={todo.isCompleted}
                      onChange={(e : ChangeEvent<HTMLInputElement>)=> toggleTodo(todo.id, e.target.checked)}/>
              {todo.name}
            </label>
            <button className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      }) }
      
    </ul>
  </> 
}
