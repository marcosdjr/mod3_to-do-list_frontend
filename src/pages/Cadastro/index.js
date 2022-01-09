import React from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const Insert = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value; 
    const priority = event.target.priority.value;
    const status = event.target.status.value;
    const deadline = event.target.deadline.value;

    const task = {
      title,
      description,
      priority,
      status,
      deadline,
    }
    

    const response = await Api.fetchPost(task);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }

  return (
    <div className='container'>
      <div id="cardcolor" className='card border-info '>
        <div className='card-body'>
        <div className='card-title text-center'>
          <h3 className='m-3'>Inserir tarefa</h3>
        </div>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-6'>
              <div className='col-6'>
                <div className='form-group'>
                  <label htmlFor='title'>Tarefa:</label>
                  <input id='title' className='form-control' type='text' placeholder='Digite o nome da Tarefa' name='title'/>
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <label htmlFor='priority'>Prioridade:</label>
                  <input id='priority' className='form-control' type='text' placeholder='Selecione a prioridade da tarefa' name='priority'/>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-6'>
                <div className='form-group'>
                  <label htmlFor='status'>Status:</label>
                  <input id='status' className='form-control' type='text' placeholder='Selecione o status da tarefa' name='status'/>
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <label htmlFor='deadline'>Prazo:</label>
                  <input id='deadline' className='form-control' type='text' placeholder='Digite o prazo da tarefa' name='deadline'/>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label htmlFor='description'>Descrição:</label>
                  <input id='description' className='form-control' type='text' placeholder='Digite a descrição da tarefa' name='description'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 text-center'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <a className='btn btn-secondary' href="/">Voltar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Insert
