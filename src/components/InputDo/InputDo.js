import React, { useState } from "react";
import Icon from './Arrow.png'
import './InputDo.css'

const InputDo = ({addTask}) => {
    const [taskBox, setTaskBox] = useState('');
    
    
    return (
        <div className="Main">
            <div className="InputBlock">
                <input onChange={e => setTaskBox(e.target.value)} type='text' value={taskBox} placeholder="Type your task here" className="InputTask"/>
            
                <span onClick={() => {addTask(taskBox); setTaskBox('')}} className="Icon"><img src={Icon}/></span>

            </div>
        </div>
    )
}
export default InputDo;