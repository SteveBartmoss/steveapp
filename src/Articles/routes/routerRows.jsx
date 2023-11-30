import React from "react";
import { Route, Routes } from "react-router-dom";
import Rc1 from "../pages/rows/rc1";
import Rc2 from "../pages/rows/rc2";
import Rc3 from "../pages/rows/rc3";

function RouterRows(){
    return(
        <>
            <Routes>
                <Route path="rc1" element={<Rc1 />} />

                <Route path="rc2" element={<Rc2 />} />

                <Route path="rc3" element={<Rc3 />} />
            </Routes>
        </>
    );
}

export default RouterRows;