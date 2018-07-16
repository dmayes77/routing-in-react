import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Home extends Component {
	render() {
		return (
			<div className="text-center">
				<p>
					Studio Ghibli, Inc.is a Japanese animation film studio based in
					Koganei, Tokyo, Japan .
				</p>
				<p>
					The studio is best known for its anime feature films, and has also
					produced several short films, television commercials, and one
					television film.
				</p>
				<p>Founded: June 15, 1985, Tokyo, Japan</p>
				<p>
					Founders: Hayao Miyazaki, Isao Takahata, Toshio Suzuki, Yasuyoshi
					Tokuma
				</p>
			</div>
		);
	}
}

export default Home;
