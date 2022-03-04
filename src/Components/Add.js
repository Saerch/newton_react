import React from "react";

const Add = (props) =>
{
    console.log("props" , props);

    return (
        <>
        <p>First Name:{props.firstName}</p>
        <p>Last Name:{props.lastName}</p>
        
        
        </>
    );
};


export default Add;