import React from "react";
import { Route, Routes } from "react-router-dom";
import GifApp from "../gifapp/gifMain";

function HaveFunRouter(){
    return(
        <div>
            <Routes>
                <Route path="gifapp" element={<GifApp />}/>
            </Routes>
        </div>
    );
}

export default HaveFunRouter;