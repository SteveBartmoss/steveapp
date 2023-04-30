import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Linux1NavBar(){
    return(
        <div className="grid-dumix">

            <div className="linux-menu">
                
                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="presentacion">Presentacion</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="comandline">Comand Line</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="sintaxis">Sintaxis</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="directorio">Directorio</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="archivos">Archivos</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="editores">Editores</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="paquetes">Paquetes</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="redireccion">Redireccion</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="sudo">Sudo</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="system">System</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="usuarios">Usuarios</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive})=> `tema ${isActive ? 'active':''}`} to="permisos">Permisos</NavLink>
                </li>
            </div>
            <Outlet />
        </div>
    );
}

export default Linux1NavBar;