import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center bg-info">
                <h1 className="">To Do List</h1>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-info bg-opacity-75" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cadastrar Tarefa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sobre o Desenvolvedor</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;
