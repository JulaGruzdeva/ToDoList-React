import React from "react";
import Do from "../Do/Do";
import './List.css';

const List = ({tasks, doClick}) => { 

    return(
        <>
            <div className="List">
                {tasks.map((task, index) => <Do doClick={doClick} key={index} text={task.task} id={task.id}/>)} 

            </div> 
        </>
    )
}

export default List;
