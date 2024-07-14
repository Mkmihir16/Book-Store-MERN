import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Updatebook = () => {
  const [title,settitle]=useState('')
  const [author,setauthor]=useState('')
  const [pbyear,setpbyear]=useState('')
  const [book,setbook]=useState({})
  const id=useParams().id;
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:5000/book/${id}`).then((resp)=>{
      setbook(resp.data)
    })
  },[])
  const myfun=(e)=>{
    e.preventDefault();
    const data={
      title,
      author,
      pbyear
    }
    axios.put(`http://localhost:5000/book/${id}`,data).then(()=>{
      navigate("/")
    }).catch((error)=>{
      console.log("Error in updating a book")
    })
  }
  return (
    <div className='flex justify-evenly'>
      <div>
      <h1>Old Book Details</h1>
      <form className=' h-[100%] flex justify-center flex-col items-center ' >
        <div className='flex flex-col'>
        <label htmlFor="">Title</label>
        <input type="text" value={book.title} className='text-lg border-2 py-1 px-3 rounded-md border-black' disabled={true} name="" id=""  placeholder='Enter a title of a book'/>
        </div>
        <div  className='flex flex-col'>
        <label htmlFor="">Author</label>
        <input type="text" value={book.author} className='text-lg border-2 py-1 px-3 rounded-md border-black' disabled={true} name="" id=""  placeholder='Enter a title of a book'/>
        </div>
        <div className='flex flex-col'>
        <label htmlFor="">Publish Year</label>
        <input type="number" value={book.pbyear} className='text-lg border-2 py-1 px-3 rounded-md border-black' disabled={true} name="" id=""  placeholder='Enter a title of a book'/>
        </div>
      </form>
      </div>

      <div>
        <h1>Update details here</h1>
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
        <input type="number" value={pbyear} className='text-lg border-2 py-1 px-3 rounded-md border-black' onChange={(e)=>setpbyear(e.target.value)} name="" id=""  placeholder='Enter a publish year of a book'/>
        </div>
        <button className='px-4 py-2 font-bold bg-blue-400 rounded-lg mt-2' onClick={myfun}>Update</button>
      </form>
      </div>
    </div>
  )
}

export default Updatebook
