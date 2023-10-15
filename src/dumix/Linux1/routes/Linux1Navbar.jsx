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
                
                <div className="gif-footer">
                    <div className="footer-item">
                        <h1 className="title1">Importante</h1>
                        <p className="Content">Esta seccion es creada con el fin de compartir informacion
                            con otros usuarios o personas que quieren empezar en el mundo de linux pero
                            que pueden verse abrumados por la cantidad de comandos o diferencias que se
                            tienen con los sistemas de linux</p>
                    </div>
                    <div className="item-grid">
                        <h1 className="title1">Contacto</h1>
                        <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                        <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                        <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                        <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Linux1NavBar;