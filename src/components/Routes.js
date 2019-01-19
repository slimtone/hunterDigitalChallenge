import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pizza from './Pizza';
import SinglePizza from './SinglePizza';

const Routes = () => {
		return (
					<Switch>
						<Route exact path='/' component={Pizza} />
						<Route path='/pizza/:id' component={SinglePizza} />
					</Switch>
		);
}

export default Routes;
