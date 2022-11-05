import React from "react";
import styles from "./task.module.css"

const Task = ({ task, index, completeTask,removeTask}) => {

  const task_text = task.complete ? "checked" : "";

  const strike_text = task.complete ? styles.strike : styles.no_strike

  return (
    <section className={styles.task} key={task.id}>
      <div className={`${styles.todo_task} ${strike_text}`}>
        <input type="checkbox" onChange={() => completeTask(index)} checked={task_text}></input>
        {task.todo}
      </div>
      <div className={styles.task_btns}>
        <button className={styles.remove_task} onClick={() => removeTask(task.id)}>X</button>
      </div>
    </section>
  );
};

export default Task;
