import React, { useEffect, useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxBlankCircleFill  } from "react-icons/ri";
import { FaEdit, FaCheckSquare } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import './Tasks.css';

function Tasks({ task, index, taskList, setTaskList }) {

  //set hooks for editing, and the checkbox
  const [isEditing, setEdit] = useState(false)
  const [checked, setChecked] = useState(false);
  const [newTask, editTask] = useState(task);

  //checkbox handler
  const checkboxHandler = () => {
    setChecked(!checked)
  }

  const editHandler = () => {
    if (isEditing) {
      // Save the edited task
      //map the tasklist passed as a prop, checks the index passed as a prop, if i matches the index passed to the index prop, return newTask
      const updatedTasks = taskList.map((prev, i) => i === index ? newTask : prev);
      //update tasks array
      setTaskList(updatedTasks);
    }
    setEdit(!isEditing);
  }

  const deleteHandler = () => {
    let removeTask = taskList.indexOf(task);
    setTaskList((currentList => currentList.filter((_, index) => removeTask !== index)))
    
    if(taskList.length <= 1) {
      localStorage.clear();
    }
    
  }

  useEffect(() => {
    let updatedTaskList = taskList
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
  })

  return (
    <div className='flex items-center justify-between mx-12 my-5 rounded-md bg-[#e7e9ec] p-2 '>

      {/* task container */}
      <span className='flex items-center '>

        {
          !checked ? <RiCheckboxBlankCircleLine className='cursor-pointer text-2xl top-[2px] relative' onClick={checkboxHandler} /> :
          <RiCheckboxBlankCircleFill className='cursor-pointer text-2xl top-[2px] relative' onClick={checkboxHandler} />
        }
       
        {
          isEditing ?
            <input type='text' maxLength={55}
            className={`bg-[#b2bfd3] rounded-md p-4 py-2 ml-3 text-xl ${checked ? 'line-through' : ''}`} 
            value={newTask} 
            onChange={e => { editTask(e.target.value) }}
            ></input> :
            <p className={`max-w-[15rem] text-left break-words py-2 ml-3 text-xl ${checked ? 'line-through' : ''}`}>{task}</p>
        }
      </span>

      <span className='flex items-center gap-3'>
        {
          isEditing ?
            <><FaCheckSquare className=' cursor-pointer text-3xl relative left-[8px] text-green-500' onClick={editHandler} /> <i className='editInput'></i></> :
            <FaEdit className='cursor-pointer text-3xl' onClick={editHandler} />
        }

        <MdDelete className='cursor-pointer text-4xl text-red-400' onClick={deleteHandler} />
      </span>
    </div>
  )
}

export default Tasks