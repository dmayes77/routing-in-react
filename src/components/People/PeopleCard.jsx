import React from 'react';

const PeopleCard = props => {
	console.log(props);
	return (
		<React.Fragment>
			<div className="col-lg-4 col-md-6 mb-4">
				<div className="card">
					<div className="card-header text-white bg-dark px-3">
						<h5 className="card-title text-uppercase">{props.person.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted small">
							{props.person.gender}, {props.person.age}
						</h6>
					</div>
					<div className="card-body">
						<p className="card-text">{props.person.films}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default PeopleCard;
