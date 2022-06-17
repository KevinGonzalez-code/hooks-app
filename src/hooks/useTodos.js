import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/08-useReducer/todoReduce";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const onNewTodo = (todo) => {
        dispatch({
            type: 'Add Todo',
            payload: todo
        });
    }

    const getTodosToBeDone = () => {
        return todos.filter(t => t.done != false).length;
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Delete todo',
            payload: id
        });
        console.log(id)
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle todo',
            payload: id
        });
    }

    return {
        todos,
        onNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        getTodosToBeDone
    }

}
