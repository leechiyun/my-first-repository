import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

const TodoUpdate = ({ onUpdateToggle, onUpdateTodo }) => {
    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        onUpdateTodo(value);
        setValue("");
        onUpdateToggle();
    };

    return (
        <div>

            <div className="background" onClick={onUpdateToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일 수정" value={value} onChange={onChange}></input>
                <button type="submit">
                    <MdAddCircle />
                </button>
            </form>
        </div>
    )
}

export default TodoUpdate;