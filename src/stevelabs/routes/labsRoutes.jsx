import React from "react";
import { Route, Routes } from "react-router-dom";
import Prog1Navbar from "../funprog/routes/Prog1Navbar";
import Prog1Presentacion from "../funprog/pages/Presentacion";
import Prog1Algoritmo from "../funprog/pages/Algoritmo";
import Prog1Compile from "../funprog/pages/Compile";
import Prog1Estructura from "../funprog/pages/Estructura";
import Prog1Output from "../funprog/pages/Output";
import { Prog1Input } from "../funprog/pages/Input";
import { Prog1Operadores } from "../funprog/pages/Operadores";
import { Prog1Condicionales } from "../funprog/pages/Condicionales";
import { Prog1Bucles } from "../funprog/pages/Bucles";
import { Prog1HolaMundo } from "../funprog/pages/FirstProg";
import Prog1Variable from "../funprog/pages/Variable";
import CoderHome from "../coderlife/CoderHome";
import RouterCoder from "../coderlife/routes/routerCoder";
import Coder1 from "../coderlife/articles/coder1";

function LabsRoutes(){
    return(
        <div>
            <Routes>
                <Route path="program1" element={<Prog1Navbar />}>
                    <Route index element={<Prog1Presentacion />} />

                    <Route path="presentacion" element={<Prog1Presentacion />} />

                    <Route path="algoritmo" element={<Prog1Algoritmo />} />

                    <Route path="holamundo" element={<Prog1HolaMundo />} />

                    <Route path="compile" element={<Prog1Compile />} />

                    <Route path="estructura" element={<Prog1Estructura />} />

                    <Route path="salida" element={<Prog1Output />} />

                    <Route path="variable" element={<Prog1Variable />} />

                    <Route path="entrada" element={<Prog1Input />} />

                    <Route path="operadores" element={<Prog1Operadores />} />

                    <Route path="condicionales" element={<Prog1Condicionales />} />

                    <Route path="bucles" element={<Prog1Bucles />} />
                </Route>

                <Route path="coder" element={<CoderHome />} />

                <Route path="coder/*" element={<RouterCoder />} />

            </Routes>
        </div>
    );
}

export default LabsRoutes;