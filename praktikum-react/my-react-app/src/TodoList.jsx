import React, { useState } from 'react';

function TodoItem({ task, onDelete }) {  // Komponen anak yang menerima props task dan onDelete
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg mb-2 shadow-sm">
      <span>{task}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
      >
        Hapus
      </button>
    </li>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState(["Belajar React", "Mengerjakan tugas", "Membaca buku"]);  //useState([]): Digunakan untuk mengelola daftar tugas
  const [newTask, setNewTask] = useState('');   // State untuk input tugas baru

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {   // Memastikan input tidak kosong
      setTasks([...tasks, newTask]);  // Menambahkan tugas baru ke daftar
      setNewTask('');   // Mengosongkan input setelah tugas ditambahkan
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));   // Menghapus tugas berdasarkan index
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">List Tugas</h2>
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Tambahkan tugas"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Tambah
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;