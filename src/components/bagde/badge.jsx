import React from "react";

import "./bagde.css";

function Badge({label}){
    return (
        <span className="badge">{label}</span>
    );
}

export default Badge;