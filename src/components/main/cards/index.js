// @flow
import React, { useContext, useEffect } from 'react';
import Card from './card';
import './card.css';
import { Context } from '../../../Context';

const Cards = () => {
	const {
		state: {
			movies,
			response: { error, loading },
			cache,
			page,
			searchValue
		},
		actions
	} = useContext(Context);
	console.log(page);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [searchValue, page]);

	function handleScroll() {
		if (window.innerHeight + document.documentElement?.scrollTop !== document.documentElement?.offsetHeight && !loading) return;
		actions.scrollSearch(searchValue, cache, movies, page);
		console.log('Fetch more list items!');
	}

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
