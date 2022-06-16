import React from 'react'
import { useRef } from 'react'

export const TodoAdd = ({handleNewTodo}) => {

    const inputRef = useRef();

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="What to do?"
                    className="form-control"
                    ref={inputRef}
                />
                <button
                    type="button"
                    className="btn btn-outline-primary mt-2"
                    onClick={ () => handleNewTodo(inputRef.current.value) }
                >
                    Add
                </button>
            </form>
        </>
    )
}
