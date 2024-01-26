import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DivMenuRicoso } from "../../../component/Contenedores/Cajas";
import FooterRicoso from "../../component/FooterRicoso";

function RickosoNavBar() {
    return (
        <>
            <div>
                <DivMenuRicoso>
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"personajes"}>Personajes</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"locaciones"}>Locaciones</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `iten ${isActive ? 'active' : ''}`} to={"episodios"}>Episodios</NavLink>
                    </li>
                </DivMenuRicoso>
                <Outlet />
                
                <FooterRicoso />
            </div>
        </>
    );
}

export default RickosoNavBar;
