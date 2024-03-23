import { useState } from "react";

import image from './assets/react.svg';
import "./App.css";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TaskItemList from "./components/TaskItemList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task, summary) => {
    setTasks((prevTeask) => {
      const newTask = {
        title: task,
        description: summary,
        id: Math.random(),
      };

      return [...prevTeask, newTask];
    });
  };

  const handleDeleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter((task) => task.id !== id))
  }

  return(
    <>
    <Header image={{src: image, alt: 'List of tasks'}} />
    <TaskItem onAddTask={handleAddTask} />
     <TaskItemList tasks={tasks} onDelete={handleDeleteTask} />
   </>
  )
  
}

export default App;
