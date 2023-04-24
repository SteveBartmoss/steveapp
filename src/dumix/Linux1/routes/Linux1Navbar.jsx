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

        </div>
    );
}

export default Linux1NavBar;