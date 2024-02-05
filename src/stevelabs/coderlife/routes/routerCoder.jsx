import React from "react";
import { Route, Routes } from "react-router-dom";
import Coder1 from "../articles/coder1";

function RouterCoder(){
    <>
        <Routes>
            <Route path="code1" element={<Coder1 />} />
        </Routes>
    </>
}

export default RouterCoder;