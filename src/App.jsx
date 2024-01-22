import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading.jsx';

const AddEditPage = Loadable({ loader: () => import('components/AddEditPage.jsx'), loading: () => <Loading />});

class App extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<>
				<Router>
					<div id='app-content' className='app-content'>
						<div id='main-content' className='main-content'>
							<Switch>
								<Route exact path='/' component={AddEditPage} />
							</Switch>
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default App
