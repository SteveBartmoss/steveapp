import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Prog1Navbar() {

    const [isOpen,setIsOpen] = useState(true);

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

                        <di className={isOpen ? '' : 'hidenItems'}>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="presentacion">Presentacion</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="algoritmo">algoritmo</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="salida">Salida Estandar</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="entrada">Entrada Estandar</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="operadores">Operadores</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="condicionales">Condicionales</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="bucles">Bucles</NavLink>

                        </di>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Prog1Navbar;