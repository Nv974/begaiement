import React from 'react';

const Footer = () => {

	const year = new Date().getFullYear()

	return (
		<footer className="footer mt-auto py-3 bg-light">
			<div className="container">
				<span className="text-muted">&copy; {year} <a href="http://squirrel.fr" rel="noreferrer" target="_blank">Squirrel</a></span>
			</div>
		</footer>
	);
};

export default Footer;