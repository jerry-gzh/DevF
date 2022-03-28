import React, { useState, useEffect} from 'react';
import { fetchTasks, createTask, deleteTask } from './api';

import './App.css';

import Button from './components/Button'
import Task from './components/Task';
import TextInput from './components/TextInput';

function App() {
  const[taskText, setTaskText] = useState("")
  const[tasks, setTasks] = useState([])
  const[loader, setLoader] = useState(false)

  //console.count('App se renderiza')
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

  /*
    Opt1 - Bajar todas las tareas otra vez si el backend no responde la tarea. 
    opt2 - Agregar la tarea recien creada a la lista. 
    Opt3 - 
      1.Agregar la tarea a la lista local. (sin saber si la tarea se agrega de forma exitosa)
      2.Hacer post y esperar respuesta
      3.Dependiendo si exitoso ese fetch, actualizo la interfaz.
        a.Si el fetch exitoso, agrego ID. 
        b.Elimino el elemento.
  */

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

  return (
    <div className="app">
      <header className="app-header">
        <div className="task-input__container">
          <TextInput 
            value={taskText}
            placeholder="Ingresa una tarea"
            type="text"
            onChange={(e) => setTaskText(e.target.value)} 
          />
          <TextInput 
            value={taskText}
            placeholder="Ingresa tu contraseña"
            type="password"
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
      </header>
    </div>
  );
}


export default App;
