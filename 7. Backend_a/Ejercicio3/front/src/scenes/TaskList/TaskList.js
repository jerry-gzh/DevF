import React, { useState, useEffect} from 'react';
import { fetchTasks, createTask, deleteTask } from '../../api';
import './TaskList.css';
import Button from '../../components/Button'
import Task from '../../components/Task';
import TextInput from '../../components/TextInput';

function TaskList(props){
    const[taskText, setTaskText] = useState("")
    const[tasks, setTasks] = useState([])
    const[loader, setLoader] = useState(false)

    console.log(tasks)

    useEffect(() => {
        setLoader(true);
        const timeOutId = setTimeout(() => {
            console.log('Este proceso pasa después de 3 segundos');
            fetchTasks()
            .then((res) => {
                setTasks(res.data)
                setLoader(false);
            })
            .catch((err) => {
                console.error(err)
            })
        }, 2000)
        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    const addTask = () => {
        createTask(taskText)
        .then((res) => {
            const createdTask = res.data;
            setTasks(tasks.concat(createdTask))
            setTaskText('')
        })
        .catch((error) => {
        console.error(error)
        })
    }

    const onDeleteTask = (id) => {
        deleteTask(id)
        .then((res) =>{
            const deleteTask = res.data
            setTasks(tasks.filter((t) => t._id !== id))
        })
        .catch((error) => {
        console.error(error)
        })
    }

    return(
        <div className='task_list'>
            <div className="task-input__container">
            <TextInput 
            value={taskText}
                placeholder="Ingresa una tarea"
                type="text"
                onChange={(e) => setTaskText(e.target.value)} 
            />
        <Button 
            className="task-input__btn"
            onClick={addTask}
        >Ingresar tarea</Button>
        </div>
        {loader && (<p style={{color:'white'}}>Loading...</p>)}
        {tasks.map((task) => (
            <Task key={task._id} text={task.text} onDelete={() => onDeleteTask(task._id)} />
        )).reverse()}
        </div>
    )
}
export default TaskList;