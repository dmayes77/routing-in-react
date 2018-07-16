import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = { people: [] };
	}

	componentDidMount() {
		fetch(
			'https://ghibliapi.herokuapp.com/people/' + this.props.match.params.id
		)
			.then(result => result.json())
			.then(people => {
				this.setState({ people });
			});
		console.log(this.props.match.params.id);
	}
	render() {
		return (
			<div className="d-flex justify-content-center mt-3">
				<table className="table table-bordered w-50 formColor tableBorder">
					<thead>
						<tr>
							<th colSpan="2" className="text-center">
								<h2>{this.state.people.name}</h2>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Gender</th>
							<td>{this.state.people.gender}</td>
						</tr>
						<tr>
							<th scope="row">Eye Color</th>
							<td>{this.state.people.eye_color}</td>
						</tr>
						<tr>
							<th scope="row">Hair Color</th>
							<td>{this.state.people.hair_color}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Person;
