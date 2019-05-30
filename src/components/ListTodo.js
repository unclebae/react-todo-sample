import React from 'react';
import TodoItem from './TodoItem';

const ListTodo = ({todos}) => {

    const listingTodo = (todos) => {
        return todos.map((todo) => {
            return (
                <TodoItem key={todo.id} todo={todo}/>
            )
        })
    }

    return (
        <ul className="list-group">
            {listingTodo(todos)}
        </ul>
    )
}

export default ListTodo;