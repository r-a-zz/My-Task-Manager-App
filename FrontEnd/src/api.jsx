import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchTasks = () => axios.get(`${API_BASE}/tasks`);
export const createTask = (data) => axios.post(`${API_BASE}/tasks`, data);
export const updateTask = (id, data) => axios.put(`${API_BASE}/tasks/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API_BASE}/tasks/${id}`);