import React from "react";
import { Route, Routes } from "react-router-dom";
import Prog1Navbar from "../funprog/routes/Prog1Navbar";
import Prog1Presentacion from "../funprog/pages/Presentacion";

function LabsRoutes(){
    return(
        <div>
            <Routes>
                <Route path="program1" element={<Prog1Navbar />}>
                    <Route index element={<Prog1Presentacion />} />

                    <Route path="presentacion" element={<Prog1Presentacion />} />
                </Route>
            </Routes>
        </div>
    );
}

export default LabsRoutes;