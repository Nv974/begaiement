import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { useAuth } from './Hook/useAuth';

const Home = lazy(() => import('./Screens/Home'));
const Private = lazy(() => import('./Screens/Private'));
const Login = lazy(() => import('./Screens/Login'));
const NotFound = lazy(() => import('./Screens/NotFound'));

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/private" exact component={Private} />
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

// eslint-disable-next-line 
const PrivateRoute = ({ component: Component, ...rest }) => {
	// const auth = useAuth()
	// const user = auth.loggedIn() && auth.user
	const user = true
	return (<Route
		{...rest}
		render={props =>
			user ? <Component {...props} /> : <Redirect to={{ pathname: "/login", search: `?next=${props.location.pathname}` }} />
		}
	/>)
};

export default App;