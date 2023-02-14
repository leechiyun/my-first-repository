import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md"
import { BsPencil } from "react-icons/bs"
import "./TodoItem.css"

const TodoItem = ({ todo, onCheckToggle, onDeleteTodo, onUpdateToggle, onUpdateId }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <MdCheckBox onClick={() => onCheckToggle(id)} /> : <MdCheckBoxOutlineBlank onClick={() => onCheckToggle(id)} />}
                <div className="text">{text}</div>
                <BsPencil onClick={() => {
                    onUpdateToggle()
                    onUpdateId(id)
                }}></BsPencil>
                <MdDelete onClick={() => onDeleteTodo(id)} />
            </div>
        </div>
    );
};

export default TodoItem;