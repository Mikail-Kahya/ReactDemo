
interface TodoItemProps {
    completed : boolean,
    id : string,
    name : string
}

export function TodoItem({ completed, id, name } : TodoItemProps) {
    return (
        <li key={id}>
          <label>
            <input  type="checkbox" 
                    checked={completed}
                    //onChange={(e : ChangeEvent<HTMLInputElement>)=> toggleTodo(id, e.target.checked)}
                    />
            {name}
          </label>
          <button className="btn btn-danger"
                  //onClick={() => deleteTodo(id)}
                  >Delete</button>
        </li>
    )
}