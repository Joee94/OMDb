// @flow

import { getIdUrl } from './searchUtils';

const getMovies = async (searchUrl: string): Promise<{ movies: Movies, totalResults: number }> => {
	const serverResponse = await fetch(searchUrl);
	const serverResponseJson = await serverResponse.json();
	const requests = serverResponseJson.Search.map(async (movie) => await fetch(getIdUrl(movie.imdbID)));
	const responses = await Promise.all(requests);
	const movies = await Promise.all(responses.map(async (response) => await response.json()));
	const totalResults = serverResponseJson.totalResults;
	return { movies, totalResults };
};

export default getMovies;
