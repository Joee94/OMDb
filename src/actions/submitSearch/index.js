// @flow

const submitSearch = (
	movies: Movies,
	searchValue: string,
	cache: Cache,
	response: ApiResponse,
	page: number,
	totalResults: number
): $Shape<State> => {
	return { movies, searchValue, cache: { ...cache, [searchValue]: movies }, response, page: page + 1, totalResults };
};
export default submitSearch;
