import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BlogCard from './components/BlogCard'
import RunningCard from './components/RunningCard'
import Search from './components/Search'
import Home from './pages/Home'

function App() {
  const [runState, updateRunState] = useState([])
  const [blogs, updateBlogs] = useState([])
  const [formState, setFormState] = useState({
    date: '',
    distance: '',
    time: '',
    difficulty: ''
  })
  const [blogState, setBlogState] = useState({
    date: '',
    description: '',
    run: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      console.log('this is the API call')
      let response = await axios.get('http://localhost:3001/products')
      updateRunState(response.data)
    }
    apiCall()
  }, [])

  const handleRunChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleBlogChange = (event) => {
    setBlogState({ ...blogState, [event.target.id]: event.target.value })
  }

  const handleRunSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newRun = await axios
      .post('http://localhost:3001/runs', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateRunState([...runState, newRun.data])
    setFormState({
      date: '',
      distance: '',
      time: '',
      difficulty: ''
    })
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
