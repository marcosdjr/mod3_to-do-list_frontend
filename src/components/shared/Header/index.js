import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-center bg-info">
                <h1 className="">To Do List</h1>
            </div>

            <div className="d-flex justify-content-center">
                <ul  id="navbar" className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/insert">Cadastrar Tarefa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sobre o Desenvolvedor</a>
                    </li>
                </ul>

            </div>
        </div>
    );
};
export default Header;
