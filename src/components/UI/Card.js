import React from "react";
import classes from './Card.module.css'

const Card = props => {
    // have to add {props.className} bc custom components, in this case Card cannot take normal react classes like div etc. so we have to call it in here so the custom component tag can accept className (inside AddUser.js)
    return (
        <div
            className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
};

export default Card;