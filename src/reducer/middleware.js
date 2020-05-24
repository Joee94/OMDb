// @flow

import { TRIGGER_ACTION } from '../actionTypes';
import { getSearchUrl, getIdUrl, sanitizeSearchValue } from './searchUtils';
import { dispatchFail, dispatchLoading, dispatchSuccess, disptachInCache } from './dispatchSearch';

const applyMiddleware = (dispatch: Function) => async (action: Object) => {
	if (action.type === TRIGGER_ACTION) {
		const {
			payload: { searchValue, cache, response }
		} = action;
		const sanitizedSearchValue = sanitizeSearchValue(searchValue);
		const searchUrl = getSearchUrl(sanitizedSearchValue);
		dispatchLoading(dispatch, cache, sanitizedSearchValue);
		if (sanitizedSearchValue in cache) {
			// If we've searched it already just load that
			disptachInCache(dispatch, cache, sanitizedSearchValue, response);
		} else {
			try {
				const serverResponse = await fetch(searchUrl);
				const serverResponseJson = await serverResponse.json();
				const requests = serverResponseJson.Search.map(async (movie) => await fetch(getIdUrl(movie.imdbID)));
				const responses = await Promise.all(requests);
				const movies = await Promise.all(responses.map(async (response) => await response.json()));
				dispatchSuccess(dispatch, cache, sanitizedSearchValue, movies);
			} catch {
				dispatchFail(dispatch, cache, sanitizedSearchValue);
			}
		}
	} else {
		dispatch(action);
	}
};
export default applyMiddleware;
