import React from "react";
import { Route, Routes } from "react-router-dom";
import Presentacion from "../Linux1/pages/Prensentacion";
import Linux1NavBar from "../Linux1/routes/Linux1Navbar";
import Cli from "../Linux1/pages/Cli";

function RoutesDumix (){
    return(
        <div className="grid-dumix">
            <Linux1NavBar />
            <Routes>
                <Route path="/presentacion" element={<Presentacion/>}/>
            </Routes>

            <Routes>
                <Route path="/comandline" element={<Cli/>}/>
            </Routes>

            <Routes>
                <Route path="/" element={<Presentacion/>}/>
            </Routes>
        </div>
    );
}

export default RoutesDumix;