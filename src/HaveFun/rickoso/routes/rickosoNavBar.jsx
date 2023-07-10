import React from "react";
import { NavLink, Outlet  } from "react-router-dom";

function RickosoNavBar(){
    return(
        <>
        <div>
            <div>
                <div className="rick-menu">
                    <li>Personajes</li>
                    <li>Locaciones</li>
                    <li>Episodios</li>
                </div>
            </div>
        </div>
        </>
    );
}

export default RickosoNavbar;
