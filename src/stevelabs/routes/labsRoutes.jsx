import React from "react";
import { Route, Routes } from "react-router-dom";
import Prog1Navbar from "../funprog/routes/Prog1Navbar";
import Prog1Presentacion from "../funprog/pages/Presentacion";
import Prog1Algoritmo from "../funprog/pages/Algoritmo";
import Prog1Compile from "../funprog/pages/Compile";
import Prog1Estructura from "../funprog/pages/Estructura";
import Prog1Input from "../funprog/pages/Input";

function LabsRoutes(){
    return(
        <div>
            <Routes>
                <Route path="program1" element={<Prog1Navbar />}>
                    <Route index element={<Prog1Presentacion />} />

                    <Route path="presentacion" element={<Prog1Presentacion />} />

                    <Route path="algoritmo" element={<Prog1Algoritmo />} />

                    <Route path="compile" element={<Prog1Compile />} />

                    <Route path="estructura" element={<Prog1Estructura />} />

                    <Route path="salida" element={<Prog1Input />} />

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