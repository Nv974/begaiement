import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

	const [collapse, setCollapsed] = useState(true);

	const handleCollapse = () => setCollapsed(!collapse);

	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!collapse ? true : false} aria-label="Toggle navigation" onClick={handleCollapse}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={`${collapse ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<NavLink exact={true} className="nav-link" to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink exact={true} className="nav-link" to="/private">Private</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;