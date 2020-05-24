// @flow
import React, { useContext } from 'react';
import Card from './card';
import './card.css';
import { Context } from '../../../Context';

const Cards = () => {
	const {
		movies,
		replaceMissingImage,
		response: { error }
	} = useContext(Context);
	if (movies) {
		if (movies.length > 0) {
			const moviesList = movies.map((movie) => {
				return (
					<li key={movie.imdbID}>
						<Card movie={movie} replaceMissingImage={replaceMissingImage} />
					</li>
				);
			});
			return <ul>{moviesList}</ul>;
		}
		if (error) return <h2>No results found :(</h2>;
	}
	return null;
};

export default Cards;
