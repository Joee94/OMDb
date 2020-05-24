// @flow

const apiKey = '13b4bd07'; // Would store the API key in the environment variables usually
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

export const getSearchUrl = (searchValue: string): string => `${baseUrl}&s=${searchValue}`;
export const getIdUrl = (imdbID: string): string => `${baseUrl}&i=${imdbID}`;
export const sanitizeSearchValue = (searchValue: string): string =>
	searchValue
		.trim()
		.replace(/\s+/g, '+')
		.toLowerCase();
