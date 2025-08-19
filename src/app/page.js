"use client";

import { useState } from "react";

export default function HomePage() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender useState", completed: true },
    { id: 2, text: "Dominar las props", completed: true },
    { id: 3, text: "Manejar eventos de formularios", completed: false },
    { id: 4, text: "Renderizar listas con map", completed: false },
  ]);

  // Estado para el valor del input
  const [inputValue, setInputValue] = useState("");

  // Función para añadir una nueva tarea
  const handleAddTask = () => {
    if (inputValue.trim() === "") return; // Evita añadir tareas vacías

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue(""); // Limpia el input
  };

  // Función para marcar una tarea como completada
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 1. La nueva función para eliminar una tarea
  const handleDeleteTask = (idToDelete) => {
    // Usamos filter() para crear un nuevo array sin la tarea a eliminar
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "left" }}>Lista de Tareas</h1>
      <p>Escribe la tarea a añadir:</p>

      {/* Input y botón para añadir tareas */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
              padding: "10px",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Click en el texto para marcar como completada */}
            <span onClick={() => handleToggleComplete(task.id)}>
              {task.text}
            </span>

            {/* 2. El botón de eliminar */}
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
              }}
            >
              [X]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
