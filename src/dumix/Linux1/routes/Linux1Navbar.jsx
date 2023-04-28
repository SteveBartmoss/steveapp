import React from "react";
import { NavLink } from "react-router-dom";

function Linux1NavBar(){
    return(
        <div className="linux-menu">

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="presentacion">Presentacion</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="comandline">Comand Line</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="sintaxis">Sintaxis</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="directorio">Directorio</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="archivos">Archivos</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="editores">Editores</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="paquetes">Paquetes</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="redireccion">Redireccion</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="sudo">Sudo</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="system">System</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="usuarios">Usuarios</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="permisos">Permisos</NavLink>
            </li>

        </div>
    );
}

export default Linux1NavBar;