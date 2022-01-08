import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';


const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = async () => {
    const response = await Api.fetchGetAll();
    const tasksApi = await response.json();
    console.log('RESPOSTA DA API', tasksApi);
    setTasks(tasksApi);
  }


  return(
    <div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
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