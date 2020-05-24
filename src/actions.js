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
		(movies: Movies, searchValue: string, cache: Cache, response: ApiResponse) => {
			dispatch({
				type: actionTypes.TRIGGER_ACTION,
				payload: { movies, searchValue, cache, response }
			});
		},
		[dispatch]
	)
});
