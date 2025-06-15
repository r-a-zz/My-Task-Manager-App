import React from "react";

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{task.name}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
