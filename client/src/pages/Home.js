import { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className="selection">
        <div className="runSelection">
          <img
            className="runLogPhoto"
            src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2856&q=80"
            alt="runner"
          />
          <div className="link">
            <Link to="/runs">Running Log</Link>
          </div>
        </div>
        <div className="blogSelection">
          <img
            className="blogPhoto"
            src="https://images.unsplash.com/photo-1560052767-406e947cc273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="sunnyRunner"
          />
          <div className="link">
            <Link to="/blogs">Running Blog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
