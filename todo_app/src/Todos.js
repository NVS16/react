import React from 'react';

const Todos = ({todos, delTodo}) => {
    let todosList = todos.length ? todos.map(td => {
        return (
            <div className="collection-item" key={td.id}>
                <span>{td.todo}</span>
                <button className="secondary-content waves-effect waves-light btn" onClick={() => {delTodo(td.id)}}>
                    <i className="material-icons">delete</i>
                </button>
            </div>
        );
    }) : <p>Yippie! No todos. :D</p>
    return (
        <div className="todos collection">
            {todosList}
        </div>
    );
};

export default Todos;