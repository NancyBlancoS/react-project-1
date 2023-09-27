import React from "react";

import "./avatar.css";

function Avatar({imageSrc, content}){
    return (
        <img src={imageSrc} alt={content} width="300px"/>
    );
}

export default Avatar;