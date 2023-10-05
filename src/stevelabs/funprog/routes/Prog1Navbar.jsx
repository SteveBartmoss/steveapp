import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Prog1Navbar() {
    return (
        <>
            <div className="div-prime">
                <div className="grid-dumix">
                    <div className="linux-menu">
                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="presentacion">Presentacion</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="algoritmo">algoritmo</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="salida">Salida Estandar</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="entrada">Entrada Estandar</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="operadores">Operadores</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="condicionales">Condicionales</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="bucles">Bucles</NavLink>
                        </li>

                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Prog1Navbar;