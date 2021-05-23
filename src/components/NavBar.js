import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="navbar-expand ">
			<ul className="navbar-nav ">
				<li className=" m-3">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className=" m-3">
					<NavLink to="/todos">Todos</NavLink>
				</li>
				<li className=" m-3">
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
