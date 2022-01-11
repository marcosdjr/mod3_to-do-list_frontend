import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";
import "./index.css";

const Edit = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    priority: "",
    status: "",
    deadline: "",
    description: "",
  });

  useEffect(() => {
    getTaskById();
  }, []);

  const { id } = useParams();

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const task = await response.json();
    setTask(task);
    
  };

  const handleFieldsChange = (event) => {
    const taskEdit = {
      ...task,
    };
    taskEdit[event.target.id] = event.target.value;
    setTask(taskEdit);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await Api.fetchPut(task, id);
    if (response.status > 500) {
      alert('Erro no servidor.', response.message)
    }
    const data = await response.json();
    alert(data.message);

    navigate(`/view/${id}`);
  };

  return (
    <div className="container">
      <div id="cardcolor" className="card border-info ">
        <div className="card-body">
          <div className="card-title text-center">
            <h3 className="m-3">Editar tarefa</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mb-6">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="title">Tarefa:</label>
                  <input
                    id="inputTitle"
                    className="form-control"
                    type="text"
                    placeholder="Digite o title da Tarefa"
                    name="title"
                    value={task.title}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="priority">Prioridade:</label>
                  <select value={task.priority} onChange={handleFieldsChange} id="priority" class="form-select" aria-label="Default select example">
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                  </select>                                   
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <select value={task.status} onChange={handleFieldsChange} id="status" class="form-select" aria-label="Default select example">
                    <option selected value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                  </select>  
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="deadline">Prazo:</label>
                  <input
                    id="deadline"
                    className="form-control"
                    type="text"
                    placeholder="Digite o prazo da tarefa"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="description">Descrição:</label>
                  <input
                    id="description"
                    className="form-control"
                    type="text"
                    placeholder="Digite a descrição da tarefa"
                    name="description"
                    value={task.description}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <button className="btn btn-success me-2" type="submit">
                  Enviar
                </button>
                <a className="btn btn-secondary" href="/">
                  Voltar
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
