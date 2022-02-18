import React, { lazy } from 'react';

const Layout = lazy(() => import('../Components/Layout'));

const Private = () => {
	return (
		<Layout title="Private">
			<div className="container">
				<h1 className="mt-5">Private page</h1>
			</div>
		</Layout>
	);
};

export default Private;