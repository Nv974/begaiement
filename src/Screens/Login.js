import React, { lazy } from 'react';

const Layout = lazy(() => import('../Components/Layout'));

const Login = () => {
	return (
		<Layout title="Connexion">
			<div className="container">
				<form className="form-signin">
					<h1 className="h3 mb-3 fw-normal">Veuillez vous connecter</h1>
					<label htmlFor="inputEmail" className="mt-3">Email</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email" required="" autoFocus="" />
					<label htmlFor="inputPassword" className="mt-3">Mot de passe</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Mot de passe" required="" />
					<button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
				</form>
			</div>
		</Layout>
	);
};

export default Login;