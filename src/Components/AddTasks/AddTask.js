import React, { useState, useEffect } from 'react'
import './AddTask.css'


function AddTask({taskList, setTaskList}) {

  const [input, setInput] = useState("");
  const [noInput, setNoInput] = useState(false);

  const handleAddTask = (e) => {

    if(input.length <= 0){
      e.preventDefault();
      setNoInput(true);
    } else {
        e.preventDefault();
        const updatedTaskList = [...taskList, input];
        setTaskList(updatedTaskList);
        setInput("")
        setNoInput(false);
        localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
      }
  }

  return (
    <div className='flex flex-col py-5 relative text-center'>
      {noInput ? <i className='absolute -top-1 left-[50%] translate-x-[-50%] text-red-700 not-italic'>Input a task</i>: ``}
      <div>
        <form onSubmit={handleAddTask} className='flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <input maxLength={55} type='text' className="text-xl" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <span className='underlineText'></span>
        </div>
        <button type='button' onClick={handleAddTask} className='bg-green-300 px-5 py-2 ml-5 addBttn rounded-md'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask