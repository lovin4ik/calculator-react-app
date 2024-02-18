import React from 'react';
import classes from './display.module.css'
const Display = (props) => {
    return (
        <div className={classes.display}>
            <input className={classes.input} type="text" readOnly placeholder={props.showinput} />
            <p className={classes.result}>
                Result: <span>{props.result}</span>
            </p>
        </div>
    );
};

export default Display;