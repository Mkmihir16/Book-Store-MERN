import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const DeleteBook = () => {
  const navigate=useNavigate();
  const id=useParams().id
  const myfun=()=>{
    axios.delete(`http://localhost:5000/book/${id}`).then(()=>{
      navigate("/");
    }).catch((error)=>{
      console.log("Error while deleting a book")
    })
  }
  return (
    <div className='flex flex-col justify-center items-center'>
  
      <h1 className='text-center text-2xl'>Do You Really want to delete this book?</h1>
      <button className='bg-red-700 text-white text-bold px-4 py-2 mt-2 ' onClick={myfun}>Delete Book</button>
    </div>
  )
}

export default DeleteBook
