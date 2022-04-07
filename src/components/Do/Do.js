import React from "react";
import './Do.css';



const Do = ({text, status, doClick, id, removeTask}) => {

    const styleBtn = {
        color: status ? "#ACACAC" : "#504949",

    }
    const styleCheck = {
        background: status ? "#F4ABAB" : 'white'
    }
    return(
        
        <div onClick={() => {doClick(id)}} style={{display: 'flex', marginBottom: '19px'}}>
            <div id="check" style={styleCheck}></div>
            <p style={styleBtn}>{text}</p>
           
        </div>
    )
}

export default Do;