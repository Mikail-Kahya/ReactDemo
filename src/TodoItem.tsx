import { type ChangeEvent } from 'react'
import type { TodoInteractions } from './Types';

interface TodoItemProps {
    id : string,
    name : string,
    isCompleted : boolean,
    keyValue : string,
    todoInteractions : TodoInteractions
}

export function TodoItem({ id, name, isCompleted, keyValue, todoInteractions } : TodoItemProps) {
    return (
        <li key={keyValue}>
          <label>
            <input  type="checkbox" 
                    checked={isCompleted}
                    onChange={(e : ChangeEvent<HTMLInputElement>)=> todoInteractions.toggle(id, e.target.checked)}
                    />
            {name}
          </label>
          <button className="btn btn-danger"
                  onClick={() => todoInteractions.delete(id)}
                  >Delete</button>
        </li>
    );
}