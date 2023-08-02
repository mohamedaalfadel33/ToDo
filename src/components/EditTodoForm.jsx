/* eslint-disable react/prop-types */
import { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [input, setInput] = useState(task.task);

  const handelSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    console.log(input);
    setInput('');
  };

  return (
    <div className="input">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Update Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-input"
        />
        <button className="btn-submit" type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
