import { type ChangeEvent } from 'react'
import { TodoItem } from './TodoItem.tsx';
import { type Task } from './Types.tsx'

interface TodosProps {
    list : Task[]
}

export function TodoList({list} : TodosProps) {
    return (
        <ul className='list'>
            { list.length === 0 && "No Todos" }
            { list.map(todo => { return <TodoItem completed={todo.isCompleted} name={todo.name} id={todo.id}/> }) }
        </ul>
    );
}