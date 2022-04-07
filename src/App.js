import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonPlus from './components/ButtonPlus/ButtonPlus';
import Complited from './components/Comlited/Complited';
import Header from './components/Header/Header';
import InputDo from './components/InputDo/InputDo';
import List from './components/List/List';

function App() {
  const [inputStatus, changeInputStatus] = useState(false);
  function btnClick(){
      changeInputStatus(!inputStatus)
  }
  
  const [listTask, changeListTask] = useState(
    JSON.parse(localStorage.getItem('listTask')) || []
    )

  useEffect(()=>{
    localStorage.setItem('listTask', JSON.stringify(listTask))
  },[listTask])  

  function addTask(stringTask){
    changeListTask([...listTask, {task: stringTask, done: false, id: Date.now()}]);

  }
  const removeTask = (id) => {
    changeListTask([...listTask.filter((task) => task.id !== id)])
    localStorage.removeItem('listTask')
  }

  function doClick(id){
    const arrWithoutElement = listTask.filter((item) => item.id != id);
    const element = listTask.find((item) => item.id === id);
    const modifyElement = {...element, done: !element.done};
    
    console.log(element, modifyElement);
    setTimeout(()=>changeListTask([...arrWithoutElement, modifyElement]),300)
    
  }

  
  
  return (
    <div className="App">
      <Header/>
      {inputStatus ? <InputDo addTask={addTask}/> : null}
      <List doClick={doClick} tasks={listTask.filter((item) => item.done === false)}/>
      <Complited removeTask={removeTask} tasks={listTask.filter((item) => item.done === true)}/>
      <ButtonPlus clicked={btnClick}/>
      
      <div className='background-images' src='../img/BlueBackBottom.svg'/>
    </div>
  );
}

export default App;
