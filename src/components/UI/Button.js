import React from "react";

const Button = (props) => (
    <button 
        className={props.classes} 
        onClick={props.click}
        href={props.href}>
        {props.children}
    </button>
)

export default Button;