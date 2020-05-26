// @flow

import { INITIAL_SEARCH, SCROLL_SEARCH } from '../actionTypes';
import { getSearchUrl, sanitizeSearchValue } from './searchUtils';
import { dispatchFail, dispatchLoading, dispatchSuccess, disptachInCache } from './dispatchSearch';
import getMovies from './getMovies';

const applyMiddleware = (dispatch: Function) => async (action: Object) => {
	if (action.type === INITIAL_SEARCH) {
		const {
			payload: { searchValue, cache, response }
		} = action;
		const sanitizedSearchValue = sanitizeSearchValue(searchValue);
		const searchUrl = getSearchUrl(sanitizedSearchValue, 1);
		console.log(searchUrl);
		dispatchLoading(dispatch, cache, sanitizedSearchValue);
		if (sanitizedSearchValue in cache) {
			// If we've searched it already just load that
			disptachInCache(dispatch, cache, sanitizedSearchValue, response);
		} else {
			try {
				const { movies, totalResults } = await getMovies(searchUrl);
				dispatchSuccess(dispatch, cache, sanitizedSearchValue, movies, 1, totalResults);
			} catch (error) {
				console.log(error);
				dispatchFail(dispatch, cache, searchValue, error);
			}
		}
	} else if (action.type === SCROLL_SEARCH) {
		const {
			payload: { searchValue, page, cache, movies }
		} = action;
		try {
			const searchUrl = getSearchUrl(searchValue, page);
			console.log(searchUrl);
			const { movies: newMovies, totalResults } = await getMovies(searchUrl);
			dispatchSuccess(dispatch, cache, searchValue, [...movies, ...newMovies], page, totalResults);
		} catch (error) {
			console.log(error);
			dispatchFail(dispatch, cache, searchValue, error);
		}
	} else {
		dispatch(action);
	}
};
export default applyMiddleware;
