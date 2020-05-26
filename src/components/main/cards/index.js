// @flow
import React, { useContext, useEffect } from 'react';
import Card from './card';
import './card.css';
import { Context } from '../../../Context';

const endString = `That's all folks`;
const Cards = () => {
	const {
		state: {
			movies,
			response: { error, loading },
			cache,
			page,
			searchValue,
			totalResults
		},
		actions
	} = useContext(Context);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [searchValue, page, totalResults]);

	function handleScroll() {
		if (!loading)
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
				if (movies.length < totalResults) actions.scrollSearch(searchValue, cache, movies, page, totalResults);
		console.log('Fetch more list items!');
	}

	if (movies) {
		const noMoviesLeft = movies.length >= totalResults ? <h1 className="endString">{endString}</h1> : null;
		if (movies.length > 0) {
			const moviesList = movies.map((movie, index) => {
				return (
					<li key={`${movie.imdbID}-${index}`}>
						<Card movie={movie} actions={actions} />
					</li>
				);
			});
			return (
				<div className="cards">
					<ul>{moviesList}</ul>
					{noMoviesLeft}
				</div>
			);
		}
		if (error) return <h2>{error}</h2>;
	}
	return null;
};

export default Cards;
