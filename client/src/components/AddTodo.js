import React, { useState } from 'react';
import "../styles/style.css";

function AddTodo({ addTodo }){
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      title : title,
    });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Todo in Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;