import React from "react";
import { FiDelete } from 'react-icons/fi';
import Do from "../Do/Do";
import '../Do/Do.css';
import './Complited.css';


const Complited = ({tasks, removeTask}) => {
    
    return (
        <>
            <h1 className="title-do">Complited</h1>
            <div className="Complited">
                {tasks.map((item, index) => 
                    <div className="ListItem" key={item.id}>
                        <Do key={index} text={item.task} status={item.done}/>
                        <FiDelete className='BsTrash' onClick={() => removeTask(item.id)} />
                    </div>)}
            
            </div>
        
        </>
        

    )
}
export default Complited;