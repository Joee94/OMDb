// @flow
import React, { useContext } from 'react';
import Card from './card';
import './card.css';
import { Context } from '../../../Context';

const Cards = () => {
	const {
		movies,
		actions,
		response: { error }
	} = useContext(Context);
	if (movies) {
		if (movies.length > 0) {
			const moviesList = movies.map((movie, index) => {
				return (
					<li key={`${movie.imdbID}-${index}`}>
						<Card movie={movie} actions={actions} />
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
