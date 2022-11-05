

import React, { useState, useEffect } from 'react';

import styles from './app.module.css';
import data from './data.json'
import Header from "./components/Header/Header";
import NewTask from './components/NewTask/NewTask';
import ToDoList from './components/ToDoList/ToDoList';


function App() {

  const [toDoList, setToDoList] = useState(data)
  const [taskRemaining, setTaskRemaining] = useState(0)

  useEffect(()=>{
    let remainingTask = [...toDoList].filter((task) => {
      return !task.complete
    })

    let count = remainingTask.length

    setTaskRemaining(count)
  },[toDoList])

  const completeTask = (index) => {
    let currentTask = [...toDoList][index]
    currentTask.complete = !currentTask.complete
    setToDoList([...toDoList])
  }

  const removeTask = (id) => {
    let filteredTask = [...toDoList].filter((task) => {
      return task.id != id
    })
    setToDoList(filteredTask)
  }

  const addTask = (todo) => {
    let newTask = [{todo: todo, complete: false, id: [...toDoList].length+1},...toDoList]
    setToDoList(newTask)
  }


  return (
    <div className={styles.app}>
      <Header taskRemaining={taskRemaining}/>
      <NewTask addTask={addTask}/>
      <ToDoList toDoList={toDoList} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  );
}

export default App;
