import axios from 'axios';

export const fetchTasks = (token) => {
    return axios.get('http://localhost:5000/api/tareas', {
        headers:{
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzI1NmRjY2ZlNTdhMDk4YjM3NjNkOCIsImlhdCI6MTY0ODA4NjA3OCwiZXhwIjoxNjUwNjc4MDc4fQ.XU3KCpmfafcuBAcfHWEhhDR1kqlWfP-FXCdI0Dpa4ls`,
            'Content-Type': `aplication/x-www-form-urlencoded`
        }
    })
}