import { TodoItem } from './TodoItem.tsx';
import { type Task, type TodoInteractions } from './Types.tsx'

interface TodosProps {
    list : Task[],
    todoInteractions : TodoInteractions
}

export function TodoList({list, todoInteractions} : TodosProps) {
    return (
        <ul className='list'>
            { list.length === 0 && "No Todos" }
            { list.map(todo => { 
                return <TodoItem 
                            {...todo} 
                            keyValue={todo.id}
                            todoInteractions={todoInteractions}/>; 
                }) }
        </ul>
    );
}