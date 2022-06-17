import React from 'react';
import useForm from '../../hooks/useForm';

export const TodoAdd = ( {onNewTodo} ) => {

    const { description, onInputChange } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
    }


    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="What to do?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Add
                </button>
            </form>
        </>
    )
}
