import React, { useState } from 'react';
import './App.css';
import Template from './components/Template.js';
import TodoList from './components/TodoList.js';
import TodoInsert from './components/TodoInsert';
import TodoUpdate from './components/TodoUpdate';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;

function App() {

  const [insertToggle, setInsertToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ])

  const onInsertToggle = () => {
    setInsertToggle(!insertToggle);
  }

  const onUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  }

  const onUpdateId = (id) => {
    setUpdateId(id);
  }

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert("할 일을 추가해주세요.")
    }
    else {
      const newTodo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos([...todos, newTodo]);
      nextId++;
    }
  };

  const onUpdateTodo = (updateText) => {
    if (updateText === '') {
      return alert("할 일을 수정해주세요.")
    }
    else {
      setTodos(todos => todos.map(todo => (todo.id === updateId ? { ...todo, text: updateText } : todo)))
    }

  };

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }

  const onDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} onDeleteTodo={onDeleteTodo} onUpdateToggle={onUpdateToggle} onUpdateId={onUpdateId} />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} />}
        {updateToggle && <TodoUpdate onUpdateToggle={onUpdateToggle} onUpdateTodo={onUpdateTodo} />}
      </Template>
    </div>
  );
}

export default App;
