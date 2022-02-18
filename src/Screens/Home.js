import React, { lazy } from 'react';

const Layout = lazy(() => import('../Components/Layout'));

const Home = () => {
	return (
		<Layout title="Accueil">
			<div className="container">
				<h1 className="mt-5">Squirrel Starter Kit</h1>
				<p className="lead">Explore source <code>code</code> to find nuts</p>
			</div>
		</Layout>
	);
};

export default Home;