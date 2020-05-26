// @flow
import { useCallback } from 'react';
import * as actionTypes from './actionTypes';

export const useActions = (state: State, dispatch: Object) => ({
	replaceMissingImage: useCallback(
		(posterUrl: string) => {
			dispatch({
				type: actionTypes.REPLACE_MISSING_IMAGES,
				payload: {
					movies: state.movies,
					posterUrl
				}
			});
		},
		[dispatch]
	),

	submitFilters: useCallback(
		(movies: Movies) => {
			dispatch({
				type: actionTypes.SUBMIT_FILTERS,
				payload: { movies }
			});
		},
		[dispatch]
	),

	submitSearch: useCallback(
		(searchValue: string, cache: Cache, response: ApiResponse, page: number) => {
			console.log(page);
			dispatch({
				type: actionTypes.INITIAL_SEARCH,
				payload: { searchValue, cache, response, page }
			});
		},
		[dispatch]
	),
	scrollSearch: useCallback(
		(searchValue: string, cache: Cache, movies: Movies, page: number) => {
			console.log(page);
			dispatch({
				type: actionTypes.SCROLL_SEARCH,
				payload: { searchValue, cache, movies, page: state.page }
			});
		},
		[dispatch]
	)
});
