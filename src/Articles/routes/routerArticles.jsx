import React from "react";
import { Route, Routes } from "react-router-dom";
import Rows from "../pages/rows";
import RouterRows from "./routerRows";

function ArticlesRouter(){
    return(
        <>
            <Routes>
                <Route path="rows" element={<Rows />} />

                <Route path="rows/*" element={<RouterRows />} />
                
            </Routes>
        </>
    );
}

export default ArticlesRouter;