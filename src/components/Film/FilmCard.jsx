import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

const FilmCard = props => {
	return (
		<Fragment>
			<div className="col-lg-4 col-md-6 mb-4">
				<div className="card">
					<div className="card-header text-white bg-dark px-3">
						<h5 className="card-title text-uppercase">{props.film.title}</h5>
						<h6 className="card-subtitle mb-2 text-muted small">
							{props.film.release_date}
						</h6>
					</div>
					<div className="card-body">
						<p className="card-text">{props.film.description}</p>
						<div className="bottom">
							<h6>
								<strong>Directed by {props.film.director}</strong>
							</h6>
							<h6>
								<strong>Produced by {props.film.producer}</strong>
							</h6>
							<Link to={`/films/${props.film.id}`}>View More</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default FilmCard;
