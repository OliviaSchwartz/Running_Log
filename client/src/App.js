import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BlogCard from './components/BlogCard'
import RunningCard from './components/RunningCard'
import Search from './components/Search'
import Home from './pages/Home'
import ViewRuns from './pages/ViewRuns'
import RunDetails from './pages/RunDetails'

function App() {
  const [blogs, updateBlogs] = useState([])

  const [blogState, setBlogState] = useState({
    date: '',
    description: '',
    run: ''
  })

  const handleBlogChange = (event) => {
    setBlogState({ ...blogState, [event.target.id]: event.target.value })
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runs" element={<ViewRuns />} />
        <Route path="/runs/:id" element={<RunDetails />} />
      </Routes>
    </div>
  )
}

export default App
