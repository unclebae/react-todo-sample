import React from 'react';

const TodoItem = ({todo}) => {
    const active = (todo) => {
        switch(todo.action) {
            case 'READY':
                return '';
            case 'DOING':
                return 'list-group-item-action';
            case 'DONE':
            default:
                return 'list-group-item-action isable';
        }

    }

    return (
        <li className="list-group-item {this.active(todo)}">{todo.title} - {todo.action}</li>
    )
}

export default TodoItem;