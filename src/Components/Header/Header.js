import React from 'react' 
import { FaPencilAlt } from "react-icons/fa";

function Header() {
  return (
    <div className='flex items-center justify-center  p-7'>
        <FaPencilAlt className='text-4xl'/>
        <h1 className='uppercase text-5xl font-bold tracking-widest ml-4'>Todo List</h1>
    </div>
  )
}

export default Header