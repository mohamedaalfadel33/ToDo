/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import Form from './Form';
import '../App.css';
import { useState } from 'react';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';

const Box = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo) return;

    setTodos([
      ...todos,
      {
        id: new Date().getSeconds(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handelReset = () => {
    setTodos([]);
  };
  return (
    <div className="container">
      <h1>Get things Done!!!</h1>

      <Form addTodo={addTodo} onHandelReset={handelReset} />
      {todos.map((todo, i) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={i} />
        ) : (
          <TodoForm
            task={todo}
            number={i + 1}
            key={i}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Box;
