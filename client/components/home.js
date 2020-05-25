import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Dashboard
          <div id="Dashboard">
            <Link to="/dashboard/profile/061f2100-c32d-461a-9f6c-20e6535a4365">Go To Profile</Link>
            <Link to="/dashboard/main"> Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
