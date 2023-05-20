import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Linux1NavBar(){
    return(
        <div className="grid-dumix">

            <div className="linux-menu">
                
                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="presentacion">Presentacion</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="comandline">Comand Line</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="sintaxis">Sintaxis</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="directorio">Directorios</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="archivos">Archivos</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="editores">Editores</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="paquetes">Paquetes</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="redireccion">Redireccion</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="sudo">Sudo</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="system">System</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="usuarios">Usuarios</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'select':''}`} to="permisos">Permisos</NavLink>
                </li>
            </div>
            <Outlet />
            <div className="div-asite">
                <h1 className="title1">Tambien te puede interesar</h1>
            </div> 
        </div>
    );
}

export default Linux1NavBar;