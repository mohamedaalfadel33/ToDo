/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ addTodo, onHandelReset }) => {
  const [input, setInput] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    console.log(input);
    setInput('');
  };

  return (
    <div className="input">
      <div className="round-icon" onClick={() => onHandelReset()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
      <form onSubmit={handelSubmit} className='from'>
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-input"
        />
        <button className="btn-submit" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
