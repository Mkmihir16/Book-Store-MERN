import React from 'react'
import deleteimg from "../assets/icons8-delete.svg"
import createimg from "../assets/icons8-plus.svg"
import infoimg from "../assets/icons8-info.svg"
import { Link } from 'react-router-dom'
import updateicon from '../assets/updateicon.png'
import axios from 'axios'
import { useState } from 'react'
const Home = () => {
  const [book, setBook] = useState([])
  axios.get("http://localhost:5000/book").then((response) => {
    const data = response.data;
    // console.log(data)
    setBook(data);
  })
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className=' text-red-600 font-extrabold text-4xl '>Book Store App</h1>
      </div>
      <div className='flex justify-center mt-4'>
        {/* <table className='text-center border-black border-2'>
          <thead className='border-black border-2' >
          <tr className='text-xl' >
            <th className='py-3 px-6'>Sr. No</th>
            <th className='py-3 px-6'> Title</th>
            <th className='py-3 px-6'>Author</th>
            <th className='py-3 px-6'>Publish Year</th>
            <th className='py-3 px-6'>Operations</th>
          </tr>
          </thead>
          {book ? book.map((val, index) => {
            return <tbody>
              <tr>
                <td>
                  {index+1}
                </td>
                <td>
                  {val.title}
                </td>
                <td>
                  {val.author}
                </td>
                <td>
                  {val.pbyear}
                </td>
             <td>
              <div className='flex justify-center '>
            <Link to={`/book/${val._id}`}>
              <img src={infoimg} alt="" />
            </Link>
            <Link to={`/book/update/${val._id}`}>
              <img className='h-8' src={updateicon} alt="" />
            </Link>
            <Link to={`/book/delete/${val._id}`}>
              <img  className='h-7' src={deleteimg} alt="" />
            </Link>
            </div>
             </td>
              </tr>
            </tbody>}
    ):<tr>No record of books are store</tr>
    }</table>   */}
        {book ? book.map((val, index) => {
          return <div className='card h-40 w-72 border-2 border-black rounded-lg mx-2'>
            <div className='  upperpart flex h-8 justify-between items-center'>
              <div className='px-6 py-2 font-extrabold'>
                {val.title}
              </div>
              <div className='flex justify-center items-center '>
                <Link to={`/book/${val._id}`}>
                  <img src={infoimg} alt="" />
                </Link>
                <Link to={`/book/update/${val._id}`}>
                  <img className='h-8' src={updateicon} alt="" />
                </Link>
                <Link to={`/book/delete/${val._id}`}>
                  <img className='h-7' src={deleteimg} alt="" />
                </Link>
              </div>
            </div>
            <hr  />
            <div className='lowerpart flex  justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <p>Author : {val.author}</p>
                <p>Publish Year : {val.pbyear}</p>
              </div>
            </div>

          </div>
        }) : " "}
      </div>
      <Link to='/book/create'>
        {/* <img src={createimg} className='bg-red-400 absolute top-3/4 left-[95%]' alt="" /> */}
        <button className='bg-blue-300 px-4 py-2 text-bold absolute top-3/4 left-[50%]'>Create a Book</button>
      </Link>
    </div>
  )
}

export default Home
