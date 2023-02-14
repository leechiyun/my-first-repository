import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({ todos, onCheckToggle, onDeleteTodo, onUpdateToggle, onUpdateId }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onDeleteTodo={onDeleteTodo} onUpdateToggle={onUpdateToggle} onUpdateId={onUpdateId} />
            ))}
        </div >
    );
};

export default TodoList;