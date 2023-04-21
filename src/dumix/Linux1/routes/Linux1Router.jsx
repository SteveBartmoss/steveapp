import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presentacion from "../pages/Prensentacion";

function Linux1Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="presentacion" element={<Presentacion/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Linux1Routes;