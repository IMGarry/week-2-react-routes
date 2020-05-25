import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <div id="061f2100-c32d-461a-9f6c-20e6535a4365">{user}</div>
          <Link to="/dashboard"> Go To Root</Link>
          <Link to="/dashboard/main"> Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
