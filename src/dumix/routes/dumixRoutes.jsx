import React from "react";
import { Route, Routes } from "react-router-dom";
import PrimerosPasos from "../Linux1/linuxMain";
import Presentacion from "../Linux1/pages/Prensentacion";
import Linux1NavBar from "../Linux1/routes/Linux1Navbar";

function RoutesDumix (){
    return(
        <div className="grid-dumix">
            <Linux1NavBar />
            <Routes>
                <Route path="/presentacion" element={<Presentacion/>}/>
            </Routes>
        </div>
    );
}

export default RoutesDumix;