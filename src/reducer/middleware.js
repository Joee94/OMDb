// @flow

import { TRIGGER_ACTION } from '../actionTypes';
import { getSearchUrl, getIdUrl, sanitizeSearchValue } from './searchUtils';
import { dispatchFail, dispatchLoading, dispatchSuccess, disptachInCache } from './dispatchSearch';

const applyMiddleware = (dispatch: Function) => async (action: Object) => {
	if (action.type === TRIGGER_ACTION) {
		const {
			payload: { searchValue, cache }
		} = action;
		const sanitizedSearchValue = sanitizeSearchValue(searchValue);
		const searchUrl = getSearchUrl(searchValue);
		dispatchLoading(dispatch, cache, searchValue);
		if (sanitizedSearchValue in cache) {
			// If we've searched it already just load that
			disptachInCache(dispatch, cache, sanitizedSearchValue);
		} else {
			try {
				const serverResponse = await fetch(searchUrl);
				console.log(serverResponse);
				const serverResponseJson = await serverResponse.json();
				console.log(serverResponse);
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
