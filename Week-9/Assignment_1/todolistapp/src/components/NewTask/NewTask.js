import React,{useState} from "react";
import styles from './newtask.module.css'


const NewTask = ({addTask}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value){
            return
        }
        addTask(value)
        setValue('')
    }

    const onChange = (e) => {
        e.preventDefault()
        console.log(e.currentTarget.value)
        setValue(e.currentTarget.value)
    }


    return(
        <form className={styles.newtask} onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Add a new task" name="addTask" onChange={onChange}/>
        </form>
    )
}

export default NewTask;