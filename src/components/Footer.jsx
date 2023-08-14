import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="px-4 py-8 bg-yellow text-black">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<Link to='/' className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-yellow border border-black">
				<img src={logo} alt="" />
			</Link>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ">
				<li>
					<a rel="noopener noreferrer" href="">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
  )
}

export default Footer
