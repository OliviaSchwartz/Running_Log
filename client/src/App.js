import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BlogCard from './components/BlogCard'
import RunningCard from './components/RunningCard'

import Home from './pages/Home'
import ViewRuns from './pages/ViewRuns'
import RunDetails from './pages/RunDetails'
import ViewBlogs from './pages/ViewBlogs'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runs" element={<ViewRuns />} />
        <Route path="/runs/:id" element={<RunDetails />} />
        <Route path="/blogs" element={<ViewBlogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  )
}

export default App
