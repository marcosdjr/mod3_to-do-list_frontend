import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const task = props.task;
  return (
    <Link to={`/view/${task._id}`} className="col">
      <div className="card text-center border-dark">
        <div className="card-body">
          <h5 className="card-header bg-primary border-dark">{task.title}</h5>
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger border-dark">Prioridade: {task.priority}</li>
            <li className="list-group-item list-group-item-success border-dark">Status: {task.status}</li>
            <li className="list-group-item list-group-item-secondary border-dark">Prazo: {task.deadline}</li>
          </ul>
          <p className="card-text bg-warning border-dark">Descrição: {task.description}</p>

        </div>
      </div>
    </Link>
  )
}

export default Card;