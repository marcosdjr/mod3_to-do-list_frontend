import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import "./index.css";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { parseISO, format } from 'date-fns';

const View = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState({});
    const [open, setOpen] = useState(false);

    
    useEffect(() => {
        getTaskById();
    }, [])

    const { id } = useParams();

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

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
                                    <h2 id='viewtitle' className='text-center'> {task.title}</h2>
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
                                    <label htmlFor='creationDate'>Criada em:</label>
                                    <h2 id='creationDate' className='text-center'> {task.creationDate}</h2>
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
                                <a className='btn btn-warning view' href={`/edit/${task._id}`}>Editar</a>
                                <button className='btn btn-danger me-2' onClick={openModal}>Excluir</button>
                                <a className='btn btn-secondary view' href="/">Voltar</a>
                            </div>
                        </div>
                </div>
            </div>
            
      <Modal open={open} onClose={closeModal} center >
          <div id="modalColor">
        <h2 className='my-4'>Deseja realmente excluir a tarefa?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className='btn btn-danger me-2' onClick={closeModal}>Não</button>
          <button className='btn btn-success' onClick={handleDelete}>Sim</button>
        </div>
        </div>
      </Modal>
        </div>
    )
}

export default View
