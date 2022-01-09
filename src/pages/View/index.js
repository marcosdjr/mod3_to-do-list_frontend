import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import "./index.css";

// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

const View = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getTaskById();
    }, [])

    const { id } = useParams();

    const abreModal = () => setOpen(true);
    const fechaModal = () => setOpen(false);

    const getTaskById = async () => {
        const request = await Api.fetchGetById(id);
        const task = await request.json();

        setTask(task);
    }

    const handleDelete = async () => {
        const response = await Api.fetchDelete(id);
        const data = await response.json();
        alert(data.message)
        navigate('/');
    }


    return (
        <div className='container'>
            <div id="cardcolor" className='card border-info '>
                <div className='card-body'>
                    <div className='card-title text-center'>
                        <h3 className='m-3'>{task.title}</h3>
                    </div>
                        <div className='row mb-6'>
                            <div className='col-6'>
                                <div>
                                    <label htmlFor='title'>Tarefa:</label>
                                    <h2 id='title' className='text-center'> {task.title}</h2>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div>
                                    <label htmlFor='priority'>Prioridade:</label>
                                    <h2 id='priority' className='text-center'> {task.priority}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-6'>
                                <div>
                                    <label htmlFor='status'>Status:</label>
                                    <h2 id='status' className='text-center'> {task.status}</h2>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <label htmlFor='deadline'>Prazo:</label>
                                    <h2 id='deadline' className='text-center'> {task.deadline}</h2>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label htmlFor='description'>Descrição:</label>
                                    <h2 id='description' className='text-center'> {task.description}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                                <a className='btn btn-secondary' href="/">Voltar</a>
                            </div>
                        </div>
                </div>
            </div>

            {/* <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
           
            <div className='btn-group my-3 w-100'>
              <Link to={`/edit/${task._id}`} className='btn btn-info text-white'>Editar</Link>
              <button className='btn btn-danger' onClick={abreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={fechaModal} center>
        <h2 className='my-4'>Deseja realmente excluir o task ?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className='btn btn-danger me-2' onClick={fechaModal}>Não</button>
          <button className='btn btn-success' onClick={handleDelete}>Sim</button>
        </div>
      </Modal> */}
        </div>
    )
}

export default View
