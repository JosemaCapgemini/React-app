import React from 'react';

//UI
const Todo = (props) => {
    const { todo } = props;
    const todoList = todo.map(t => {
        return (
            <div className="todo" key={t.id}>
                <div>Things to do: {t.things}</div>
            </div>
        );
    });
    return (
        <div className="todo-list">
            {todoList}
        </div>
    );
}

export default Todo;