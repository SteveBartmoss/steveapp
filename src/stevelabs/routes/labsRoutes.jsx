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

                    <Route path="salida" element={<h1>Salida</h1>} />

                    <Route path="entrada" element={<h1>Entrada</h1>} />

                    <Route path="operadores" element={<h1>Entrada</h1>} />

                    <Route path="condicionales" element={<h1>Entrada</h1>} />

                    <Route path="bucles" element={<h1>Entrada</h1>} />
                </Route>
            </Routes>
        </div>
    );
}

export default LabsRoutes;