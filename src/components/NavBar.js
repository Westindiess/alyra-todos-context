import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="navbar-expand ">
			<ul className="navbar-nav ">
				<li className=" m-2 ">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<NavLink to="/todos">Todos</NavLink>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<NavLink to="/login">Login</NavLink>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
