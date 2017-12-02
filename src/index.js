// React
import React from 'react';
import ReactDOM from 'react-dom';
// Main Component
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
// Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Root = () => {
	return(
		<Router>
			<div>
				<Switch>
				<Route exact path ="/" component={Connexion}/>
				<Route exact path ="/pseudo/:pseudo" component={App}/>
				<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
