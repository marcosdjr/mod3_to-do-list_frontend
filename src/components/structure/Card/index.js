import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const Card = (props) => {
  const task = props.task;
  return (
    <Link to={`/view/${task._id}`} style={{ textDecoration: 'none'}} className="col">
      <div className="card text-center border-dark">
        <div id="card-body"className="card-body">
          <div id="title" className="card-title">{task.title}</div>
          <ul className="list-group">
            <li id="priority" className="list-group-item">Prioridade: {task.priority}</li>
            <li id="status" className="list-group-item">Status: {task.status}</li>
            <li id="deadline" className="list-group-item">Prazo: {task.deadline}</li>
            <li id="description" className="list-group-item">Descrição: {task.description}</li>
          </ul>

        </div>
      </div>
    </Link>
  )
}

export default Card;