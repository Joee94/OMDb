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

	submitFilters: useCallback(() => {
		dispatch({
			type: actionTypes.SUBMIT_FILTERS,
			payload: {
				movies: state.movies
			}
		});
	}, [dispatch]),

	submitSearch: useCallback(
		(searchValue: string, cache: Cache) => {
			dispatch({
				type: actionTypes.TRIGGER_ACTION,
				payload: {
					movies: state.movies,
					searchValue,
					cache
				}
			});
		},
		[dispatch]
	)
});
