import React from "react";
import { Route, Routes } from "react-router-dom";
import Rc1 from "../pages/rows/rc1";
import Rc2 from "../pages/rows/rc2";
import Rc3 from "../pages/rows/rc3";
import Rc4 from "../pages/rows/rc4";
import Rc5 from "../pages/rows/rc5";

function RouterRows(){
    return(
        <>
            <Routes>
                <Route path="rc1" element={<Rc1 />} />

                <Route path="rc2" element={<Rc2 />} />

                <Route path="rc3" element={<Rc3 />} />

                <Route path="rc4" element={<Rc4 />} />

                <Route path="rc5" element={<Rc5 />} />
                
            </Routes>
        </>
    );
}

export default RouterRows;