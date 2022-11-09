import React from "react";
import styles from "./header.module.css"

const Header = ({ taskRemaining}) => {

  const task_text = (taskRemaining === 1) ? `Task (${taskRemaining})` : `Tasks (${taskRemaining})`;
  
  const task_status = taskRemaining === 0 ? styles.notask : 'havetask'


  return (
    <header className={styles.header}>
      TO DO LIST
      <span className={task_status}>{task_text}</span>
    </header>
  );
};

export default Header;
