import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Readbook = () => {
const id=useParams().id
const [books,setbook]=useState({});
// console.log(id)
useEffect(()=>{
  axios.get(`http://localhost:5000/book/${id}`).then((resp)=>{
    setbook(resp.data)
    // console.log(resp.data)
  }).catch((error)=>{
    console.log("error in finding a book")
  })
},[])

  return (
    <div>
      <div>
        <h1 className='text-2xl text-black font-extrabold text-center'>Info about a book</h1>
      </div>
      {books? 
      <div>
        <div className='flex'>
        <p>ID :</p><span>{books._id}</span>
        </div >
        <div className='flex'>
        <p>TITLE :</p><span>{books.title}</span>
        </div>
        <div className='flex'>
        <p>Author :</p><span>{books.author}</span>
        </div>
        <div className='flex'>
        <p>Publish Year :</p><span>{books.pbyear}</span>
        </div>
      </div>:<h1>Book of this ID is not found</h1> 
    }
    </div>
  )
}

export default Readbook
