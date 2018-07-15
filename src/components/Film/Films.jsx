import React, { Component, Fragment } from 'react';
import FilmCard from './FilmCard';

class Films extends Component {
	constructor(props) {
		super(props);
		this.state = { films: [] };
	}

	componentDidMount = () => {
		fetch('https://ghibliapi.herokuapp.com/films')
			.then(result => result.json())
			.then(films => {
				this.setState({ films });
			});
	};

	render() {
		return (
			<Fragment>
				<div className="row flex-wrap">
					{this.state.films.map(film => {
						return <FilmCard film={film} key={film.id} />;
					})}
				</div>
			</Fragment>
		);
	}
}

export default Films;
