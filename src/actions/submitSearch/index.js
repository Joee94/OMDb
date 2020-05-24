// @flow

const blah = (movies: Movies, searchValue: string, cache: Cache, response: Response): $Shape<State> => {
	return { movies, searchValue, cache: { ...cache, [searchValue]: movies }, response };
};
export default blah;
