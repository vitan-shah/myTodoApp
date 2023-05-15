import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (todo) => {
    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((data) => setTodos([...todos, data]));
  };

   const updateTodo = (id, updatedTitle) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updatedTitle }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            // Update the title of the matching task
            return { ...todo, title: updatedTitle };
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((error) => console.log(error));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList todos={todos} addTodo={addTodo} updateTodo={updateTodo} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
