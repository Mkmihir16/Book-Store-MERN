import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Createbook = () => {
  const [title,settitle]=useState('');
  const [author,setauthor] =useState('');
  const [num,setnum]=useState('');
  const navigate=useNavigate();
  const myfun=(e)=>{
    e.preventDefault();
    const data={
      title,
      author,
      pbyear:num,
    }
    console.log(data)
    axios.post("http://localhost:5000/book",data).then(()=>{
      navigate("/")
    }).catch((error)=>{
      console.log("Something went wrong while creating a book")
    })
  }
  return (
    <div className='h-screen'>
      <h1 className='text-2xl text-black font-extrabold text-center'>Create a book</h1>
      <form className=' h-[100%] flex justify-center flex-col items-center ' >
        <div className='flex flex-col'>
        <label htmlFor="">Title</label>
        <input type="text" value={title} className='text-lg border-2 py-1 px-3 rounded-md border-black' onChange={(e)=>settitle(e.target.value)} name="" id=""  placeholder='Enter a title of a book'/>
        </div>
        <div  className='flex flex-col'>
        <label htmlFor="">Author</label>
        <input type="text" value={author} className='text-lg border-2 py-1 px-3 rounded-md border-black' onChange={(e)=>setauthor(e.target.value)} name="" id=""  placeholder='Enter a author of a book'/>
        </div>
        <div className='flex flex-col'>
        <label htmlFor="">Publish Year</label>
        <input type="number" value={num} className='text-lg border-2 py-1 px-3 rounded-md border-black' onChange={(e)=>setnum(e.target.value)} name="" id=""  placeholder='Enter a publish year of a book'/>
        </div>
        <button className='px-4 py-2 font-bold bg-blue-400 rounded-lg mt-2' onClick={myfun}>Create</button>
      </form>
    </div>
  )
}

export default Createbook
