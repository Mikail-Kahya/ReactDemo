import { type ChangeEvent } from 'react'
import { type Task, type TodosProps } from './Types.tsx'

export function TodoList({list} : TodosProps) {
    return (
        <ul className='list'>
            { list.length === 0 && "No Todos" }
            { list.map(todo => {
              return (
                <li key={todo.id}>
                  <label>
                    <input  type="checkbox" 
                            checked={todo.isCompleted}
                            //onChange={(e : ChangeEvent<HTMLInputElement>)=> toggleTodo(todo.id, e.target.checked)}
                            />
                    {todo.name}
                  </label>
                  <button className="btn btn-danger"
                          //onClick={() => deleteTodo(todo.id)}
                          >Delete</button>
                </li>
              );
            }) }

        </ul>
    );
}