import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {
  let user = useSelector((state) => state.user);
  console.log('user=> ', user?.data?.photoURL);
  return (
    <div className="navbar bg-base-300 shadow-sm px-5">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevTinder</a>
  </div>
  <div className="flex gap-2 items-center">
    {user && (<p className='px-2'>welcome, {user?.data?.firstName}</p>)}
    {user && (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile img"
            src={user?.data?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    )}
  </div>
</div>
  )
}

export default NavBar