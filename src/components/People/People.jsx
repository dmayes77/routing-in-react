import React, { Component, Fragment } from 'react';
import PeopleCard from './PeopleCard';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends Component {
	constructor(props) {
		super(props);
		this.state = { people: [] };
	}

	componentDidMount = () => {
		fetch('https://ghibliapi.herokuapp.com/people')
			.then(result => result.json())
			.then(people => {
				this.setState({ people });
			});
	};

	render() {
		return (
			<Fragment>
				<div className="row flex-wrap">
					{this.state.people.map(person => {
						return <PeopleCard person={person} key={person.id} />;
					})}
				</div>
			</Fragment>
		);
	}
}

export default People;
