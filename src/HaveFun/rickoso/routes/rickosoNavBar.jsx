import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RickosoNavBar() {
    return (
        <>
            <div>
                <div className="div-menu-ricoso">
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"personajes"}>Personajes</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"locaciones"}>Locaciones</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"episodios"}>Episodios</NavLink>
                    </li>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default RickosoNavBar;
