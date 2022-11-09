import React from "react";
import Task from "../Task/Task";
import styles from "./todolist.module.css"


const ToDoList = ({toDoList, completeTask, removeTask}) => {
    return(
        <main className={styles.todolist}>
            {toDoList.map((task, index) => {
                return(
                    <Task  key={index} task={task} index={index} completeTask={completeTask} removeTask={removeTask}/>   
                )
            })}
        </main>
    )
}

export default ToDoList;