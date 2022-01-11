import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';
import "./index.css";


const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = async () => {
    const response = await Api.fetchGetAll();
    if(response.status >= 400 && response.status <= 600) {
      alert('Não foi possível acessar. Verifique sua API.')
    }

    const tasksApi = await response.json();
    console.log('RESPOSTA DA API', tasksApi);
    setTasks(tasksApi);
  }


  return(
    <div>
      
      <div id="body" className="row row-cols-1 row-cols-md-4 g-4" >
        {
          tasks.map((task) => (
            <Card key={task._id} task={task}/>
          ))
        }

      </div>
    </div>
  )
}
export default Tasks;