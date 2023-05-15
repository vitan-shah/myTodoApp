import React from 'react';
import "../styles/style.css"
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList({todos,addTodo,updateTodo}){
  return (
    <div className='container'>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;