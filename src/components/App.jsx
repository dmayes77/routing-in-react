import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import Home from './Home';
import Films from './Film/Films';
import Film from './Film/Film';
import People from './People/People';
import Person from './People/Person';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<div className="container p-0 mt-5">
						<div className="jumbotron text-center mb-3">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1000px-Studio_Ghibli_logo.svg.png"
								alt="Studio Ghibli logo"
								className="img-fluid"
							/>
							<Link
								to="/"
								className="btn btn-outline-dark my-5 mx-4 w-25 col-md-12"
							>
								Home
							</Link>
							<Link
								to="/films"
								className="btn btn-outline-dark my-5 mx-4 w-25 col-md-12"
							>
								View Films
							</Link>
							<Link
								to="/people"
								className="btn btn-outline-dark my-5 mx-4 w-25 col-md-12"
							>
								View People
							</Link>
						</div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/films" component={Films} />
							<Route path="/films/:id" component={Film} />
							<Route exact path="/people" component={People} />
							<Route path="/people/:id" component={Person} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
