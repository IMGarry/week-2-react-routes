import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
          <div id="title">
            <Link to="/dashboard/profile/061f2100-c32d-461a-9f6c-20e6535a4365">Go To Profile</Link>
            <Link to="/dashboard"> Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
