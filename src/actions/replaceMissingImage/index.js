// @flow

const replaceMissingImage = (movies: Array<MovieData>, posterUrl: string): $Shape<State> => {
	// Replace the 404'd image with N/A, which displays the default image in the componnet
	const movieToChange = movies.find((movie) => movie.Poster === posterUrl);
	if (movieToChange) movieToChange.Poster = 'N/A';
	return { movies };
};

export default replaceMissingImage;
