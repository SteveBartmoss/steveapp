import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Linux1NavBar() {

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

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="comandline">Comand Line</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="sintaxis">Sintaxis</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="directorio">Directorios</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="archivos">Archivos</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="editores">Editores</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="paquetes">Paquetes</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="redireccion">Redireccion</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="sudo">Sudo</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="system">System</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="usuarios">Usuarios</NavLink>

                            <NavLink className={({ isActive }) => `tema ${isActive ? 'select' : ''}`} to="permisos">Permisos</NavLink>

                        </div>

                    </div>

                    <Outlet />
                    <div className="div-asite">
                        <h1 className="title1">Tambien te puede interesar</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Linux1NavBar;