import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const { cart } = useSelector(state => state)

  return (
    <div className="flex top-0 absolute p-2 px-10 justify-between items-center w-full nev-gradient">
      <Link to='/'><img className='h-16' src={logo} alt="" /></Link>
      <ul className='flex text-white space-x-4 text-xl'>
        <li><Link to='/' className='yellow'>HOME</Link></li>
        <li><a href="" className='yellowHDark'>ABOUT US</a></li>
        <li><a href="#products" className='yellowHDark'>PRODUCTS</a></li>
        <li><a href="" className='yellowHDark'>CONTACT</a></li>
      </ul>
        <Link to="/admin" className='yellowHDark'>Admin</Link> 
      <Link to='/cart'>
        <ul className='flex text-white space-x-4 text-2xl '>
          <li className='yellowHDark'><i className="bi bi-cart3"></i><sup>{cart.length}</sup></li>
        </ul>
      </Link>

    </div>
  )
}

export default Navbar