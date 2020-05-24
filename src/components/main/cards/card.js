// @flow
import React from 'react';
import './card.css';
import noImage from './noImage.png';

type Props = {
	movie: MovieData,
	actions: Function
};

const Card = ({ movie, actions }: Props) => {
	const poster = movie.Poster === 'N/A' ? noImage : movie.Poster;
	const imgAltText = movie.Poster === 'N/A' ? `Missing poster for ${movie.Title}` : `Poster for ${movie.Title}`;
	const ariaLabel = `${movie.Title}. Released ${movie.Year}, Rated ${movie.imdbRating} on IMDB`;
	const handleError = () => {
		actions.replaceMissingImage(poster);
	};
	return (
		<div className="card" aria-label={ariaLabel} aria-required="true" tabIndex="0">
			<img src={poster} onError={handleError} alt={imgAltText} />

			<div className="text">
				<h1>{movie.Title}</h1>
				<span>
					<h2 className="label">Year:</h2> <h2 className="data">{movie.Year}</h2>
				</span>
				<span>
					<h2 className="label">Rating:</h2> <h2 className="data">{movie.imdbRating}</h2>
				</span>
			</div>
		</div>
	);
};

export default Card;
