import { useTodos } from '../../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';



export const TodoApp = () => {

    const { todos, onNewTodo, handleDeleteTodo, handleToggleTodo, getTodosToBeDone } = useTodos([]);
    
    return (
        <>
            <h1>TodoApp ({todos.length}) <small>to be done</small> ({getTodosToBeDone()}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Add Todo</h4>
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>

            </div>

        </>
    )
}
