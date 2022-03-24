import axios from 'axios';

export const fetchTasks = (token) => {
    return axios.get('http://localhost:5000/api/tareas', {
        headers:{
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
            'Content-Type': `aplication/x-www-form-urlencoded`
        }
    })
}