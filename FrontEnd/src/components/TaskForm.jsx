import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, initial = {} }) {
  const [name, setName] = useState(initial.name || '');
  const [description, setDescription] = useState(initial.description || '');

  // Sync local state when "initial" prop changes (for editing)
  useEffect(() => {
    setName(initial.name || '');
    setDescription(initial.description || '');
  }, [initial.name, initial.description]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, description });
    // Clear form only if not editing
    if (!initial.id) {
      setName('');
      setDescription('');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {initial.id ? 'Update' : 'Save'}
      </button>
    </form>
    </>
    
  );
}