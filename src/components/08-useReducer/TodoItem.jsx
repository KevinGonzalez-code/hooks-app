import React from 'react'

export const TodoItem = ({ todos }) => {
    return (
        <>

            {
                todos.map(todo => (
                    <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                        <span>{todo.description}</span>
                        <button className="btn btn-danger"> Delete </button>
                    </li>
                ))
            }
        </>
    )
}
