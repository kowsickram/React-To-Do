import React, { useState } from 'react';

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = { id: Date.now(), text: newTodo };
      setTodoList([...todoList, newTodoItem]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const updateTodo = (id, updatedText) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <p className=' text-gray-400 text-center'> Kowsick Ram</p>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg drop-shadow-xl">
        <h1 className="text-2xl text-center text-black font-bold mb-4">To-Do List</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add Task"
            className="flex-grow p-2 border rounded-md mr-2"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="bg-black text-white px-4 py-2 rounded-md mr-4" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="mt-4">
          {todoList.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-2 border-b">
              <p>{todo.text}</p>
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    const updatedText = prompt('Enter updated text', todo.text);
                    if (updatedText) {
                      updateTodo(todo.id, updatedText);
                    }
                  }}
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
