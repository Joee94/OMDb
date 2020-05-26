// @flow

import { getIdUrl } from './searchUtils';

const getMovies = async (searchUrl: string): Promise<Movies> => {
	const serverResponse = await fetch(searchUrl);
	const serverResponseJson = await serverResponse.json();
	const requests = serverResponseJson.Search.map(async (movie) => await fetch(getIdUrl(movie.imdbID)));
	const responses = await Promise.all(requests);
	return await Promise.all(responses.map(async (response) => await response.json()));
};

export default getMovies;
