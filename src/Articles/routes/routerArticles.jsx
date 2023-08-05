import React from "react";
import { Route, Routes } from "react-router-dom";
import Rows from "../pages/rows";

function ArticlesRouter(){
    return(
        <>
            <Routes>
                <Route path="rows" element={<Rows />} />
            </Routes>
        </>
    );
}

export default ArticlesRouter;