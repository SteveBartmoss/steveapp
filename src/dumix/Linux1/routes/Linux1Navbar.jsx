import React from "react";
import { NavLink } from "react-router-dom";

function Linux1Navbar(){
    return(
        <div className="linux-menu">
            <li>
                <NavLink className={({isActive})=> `tema ${isActive ? 'Active':''}`} to="presentacion">Presentacion</NavLink>
            </li>

        </div>
    );
}