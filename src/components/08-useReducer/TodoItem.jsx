import React from 'react'

export const TodoItem = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            {
                todos.map(todo => (
                    <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                        <span 
                        onClick={ () => onToggleTodo(todo.id) }
                        >{todo.description}</span>
                        <span
                            className={"w-50 d-flex justify-content-end"
                                + todo.done ? 'text-danger' : 'text-success'}>
                            {!todo.done ? 'To be made' : 'Complete'}
                        </span>
                        <button 
                            className="btn btn-danger"
                            onClick={ () => onDeleteTodo(todo.id) }
                            > Delete </button>
                    </li>
                ))
            }
        </>
    )
}
