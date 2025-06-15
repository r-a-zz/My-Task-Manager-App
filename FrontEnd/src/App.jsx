import React, { useState, useEffect } from 'react';
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask
} from './api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetchTasks();
      setTasks(res.data);
    } catch (e) {
      setError('Unable to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleSave = async data => {
    try {
      if (editing) {
        await updateTask(editing.id, data);
        setEditing(null);
      } else {
        await createTask(data);
      }
      load();
    } catch (e) {
      setError('Save failed');
    }
  };

  const handleEdit = task => setEditing(task);
  const handleDelete = async id => {
    await deleteTask(id);
    load();
  };

  return (
  <div className="max-w-xl mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    <TaskForm onSubmit={handleSave} initial={editing || {}} />
    {loading
      ? <p className="text-center">Loading...</p>
      : <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />}
  </div>
);

}