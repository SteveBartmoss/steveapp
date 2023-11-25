import React from "react";
import { Route, Routes } from "react-router-dom";
import Rw1 from "../pages/reviews/rw1";

function RouterReviews(){
    return(
        <>
            <Routes>
                <Route path="rw1" element={<Rw1 />} />
            </Routes>
        </>
    );
}

export default RouterReviews;