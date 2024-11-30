import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>OOOPSSSS!!</h1>
            <p> Something went wrong!!!</p>
            <h3>{err.status}:{err.statusText}</h3>
        </>
    )
}
export default Error;