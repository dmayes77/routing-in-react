import React from 'react';

const FilmCard = props => {
	console.log(props);
	return (
		<React.Fragment>
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
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default FilmCard;
