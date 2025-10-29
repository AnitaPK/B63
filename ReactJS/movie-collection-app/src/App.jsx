import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Likes from './pages/Likes'
import Comments from './pages/Comments'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/movie/:movieID" element={<MovieDetails />}>
          <Route path="likes" element={<Likes />}></Route>
          <Route path="comments" element={<Comments />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
