import { useState } from 'react'
import type { SubmitProps, Task } from './Types.tsx'

export function NewTodoForm(props : SubmitProps) { 
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e : React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (newItem === "") return;
        props.onSubmit(newItem);
        setNewItem("");
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="task">New item</label>
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="task" id="task" />
      </div>
      <button className="btn">Add</button>
    </form>;
}