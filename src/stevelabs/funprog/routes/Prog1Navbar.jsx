import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LabsFooter from "../../components/labsFooter";

function Prog1Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    const closeMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <>
            <div className="div-prime">
                <div className="grid-dumix">
                    <div className={isOpen ? 'open' : 'close'}>
                        <button className="dumix-btn" type="button" onClick={() => closeMenu()}>☰</button>

                        <div className={isOpen ? '' : 'hidenItems'}>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="presentacion">Presentacion</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="algoritmo">algoritmo</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="holamundo">HolaMundo</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="compile">Compilacion</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="estructura">Estructura</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="salida">Salida Estandar</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="entrada">Entrada Estandar</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="operadores">Operadores</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="condicionales">Condicionales</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="bucles">Bucles</NavLink>

                        </div>
                    </div>
                    <Outlet />
                </div>
                <LabsFooter />
            </div>
        </>
    );
}

export default Prog1Navbar;