import React from "react";
import { Route, Routes } from "react-router-dom";
import Rc1 from "../pages/rows/rc1";

function RouterRows(){
    return(
        <>
            <Routes>
                <Route path="rc1" element={<Rc1 />} />
            </Routes>
        </>
    );
}

export default RouterRows;