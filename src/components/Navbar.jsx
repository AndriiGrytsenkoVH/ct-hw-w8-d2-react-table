import React from 'react'

export default function Navbar(props) {

	function handleSearchRequest(event){
		event.preventDefault();
		props.setSearch(event.target.search.value)
		event.target.search.value = '';
	}

	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand">List of Kekambas</a>
				<form className="d-flex" role="search" onSubmit={handleSearchRequest}>
					<input
						className="form-control me-2"
						type="text"
						name='search'
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
