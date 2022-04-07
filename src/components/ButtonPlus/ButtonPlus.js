import React from "react";
import Plus from './Plus.png';
import './ButtonPlus.css';

const ButtonPlus = ({clicked}) => {
    return(
        <button onClick={clicked} type="button" className="ButtonPlus">
            <img src={Plus} className="img"/>
        </button>
    )
}



export default ButtonPlus;
