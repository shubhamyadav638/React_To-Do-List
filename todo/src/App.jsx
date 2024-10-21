import { useState } from 'react';
import {  } from "./index.css";

function App() {
  // State for tasks and input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Remove task from the list
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input for adding tasks */}
      <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Render the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            <span onClick={() => toggleTask(index)}>{task.task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
