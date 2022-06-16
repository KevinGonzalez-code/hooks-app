import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReduce';

const inicialState = [
    {
        id: new Date().getTime(),
        description: 'Take review',
        done: false
    },
    {
        id: new Date().getTime() + 200,
        description: 'Take review two',
        done: false
    }
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, inicialState);

    const handleNewTodo = (todo) => {
        console.log({todo});
    }

    return (
        <>
            <h1>TodoApp (10) <small>to be done</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Add Todo</h4>       
                    <TodoAdd handleNewTodo={handleNewTodo}/>
                </div>


            </div>

        </>
    )
}
