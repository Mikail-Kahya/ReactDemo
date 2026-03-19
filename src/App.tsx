import { useState, type SubmitEventHandler } from 'react'
import './reset.css'
import './style.css'

type Task = { id : string, 
  name : string, 
  isCompleted: boolean,
  createdTime : Date
}

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Task[]>([])

  function handleSubmit(e : React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask : Task = { 
      id: crypto.randomUUID(), 
      name: newItem, 
      isCompleted: false, 
      createdTime: new Date()
    }

    setTodos((currentTodos => {
        return [...currentTodos, newTask];
    }));

    setNewItem("");
  }

  return <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="task">New item</label>
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="task" id="task" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className='list'>
      { todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input  type="checkbox" 
                      checked={todo.isCompleted} 
                      onChange={(e : HTMLInputElement)=> toggleTodo(todo.id, e.formTarget.checked)}/>
              {todo.name}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        );
      }) }
      
    </ul>
  </> 
}
