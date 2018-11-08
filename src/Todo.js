import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const { todo } = this.props;
        const todoList = todo.map(t => {
            return (
                <div className="todo" key={t.id}>
                    <div>Things to do: {t.things}</div>
                </div>
            );
        });
        return (
            <div className="todo-list">
                { todoList }
            </div>
        );

    }
}

export default Todo;