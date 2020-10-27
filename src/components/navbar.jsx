import React from 'react';

const Navbar = ({ totalCounters }) => {
	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
			<div className='container'>
				<span className='navbar-brand'>Navbar</span>
				<span className='badge badge-light badge-pill'>{totalCounters}</span>
			</div>
		</nav>
	);
};

export default Navbar;
