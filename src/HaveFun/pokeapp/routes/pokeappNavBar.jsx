import React from "react";
import { DivMenuRicoso } from "../../../component/Contenedores/Cajas";
import { NavLink, Outlet } from "react-router-dom";

function PokeAppNavBar() {
    return (
        <>
            <DivMenuRicoso>

                <li>
                    <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"home"}>Home</NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"pokemones"}>Pokemones</NavLink>
                </li>

            </DivMenuRicoso>
            <Outlet />
        </>
    );
}

export default PokeAppNavBar;