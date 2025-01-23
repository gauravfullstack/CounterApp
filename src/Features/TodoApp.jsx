import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all"); // For filtering tasks
  const [editTaskId, setEditTaskId] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Track the new text during editing

  // Add task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(""); // Clear input after adding
    }
  };

  // Remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (id, currentText) => {
    setEditTaskId(id); // Set the task ID being edited
    setEditText(currentText); // Pre-fill the input with the current task text
  };

  // Save the edited task
  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText.trim() } : task
      )
    );
    setEditTaskId(null); // Reset editing state
    setEditText(""); // Clear the edit text
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditTaskId(null); // Reset editing state
    setEditText(""); // Clear the edit text
  };


  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-4 py-2 border rounded shadow"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Add Task
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pending
        </button>
      </div>

      <ul className="w-full max-w-lg space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-4 border rounded shadow ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            {/* Editing View */}
            {editTaskId === task.id ? (
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-grow px-2 py-1 border rounded"
                />
                <button
                  onClick={() => saveEdit(task.id)}
                  className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Normal Task View
              <div className="flex items-center w-full justify-between">
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through" : ""
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditing(task.id, task.text)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
