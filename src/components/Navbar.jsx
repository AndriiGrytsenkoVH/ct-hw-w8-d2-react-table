import React from 'react'

// TODO pass correct props
export default function Navbar(props) {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand">List of Kekambas</a>
				{/* TODO make a function on submit */}
				<form className="d-flex" role="search" onSubmit={}>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search by name"
						aria-label="Search"
					/>
					<button className="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
  )
}
