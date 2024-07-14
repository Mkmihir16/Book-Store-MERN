import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./Pages/Home";
import Createbook from "./Pages/Createbook"
import DeleteBook from "./Pages/DeleteBook"
import Readbook from "./Pages/Readbook"
import Updatebook from "./Pages/Updatebook";
const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book/create" element={<Createbook/>}/>
      <Route path="/book/:id" element={<Readbook/>}/>
      <Route path="/book/update/:id" element={<Updatebook/>}/>
      <Route path="/book/delete/:id" element={<DeleteBook/>}/>
    </Routes>
    {/* <h1 className="font-extrabold">app</h1> */}
    </div>
  )
}

export default App
