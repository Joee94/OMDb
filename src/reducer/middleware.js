import * as actionTypes from '../actionTypes';
import { getSearchUrl, getIdUrl, sanitizeSearchValue } from './searchUtils';

const disptachInCache = (dispatch, cache, searchValue) => {
	dispatch({
		type: actionTypes.SUBMIT_SEARCH,
		payload: {
			movies: cache[searchValue],
			searchValue,
			cache,
			response: { error: false, loading: false }
		}
	});
};

const dispatchSuccess = (dispatch, cache, searchValue, movies) => {
	dispatch({
		type: actionTypes.SUBMIT_SEARCH,
		payload: { movies, searchValue, cache, response: { error: false, loading: false } }
	});
};

const dispatchFail = (dispatch, cache, searchValue) => {
	dispatch({
		type: actionTypes.SUBMIT_SEARCH,
		payload: { movies: [], searchValue: searchValue, cache, response: { error: true, loading: false } }
	});
};

const dispatchLoading = (dispatch, cache, searchValue) => {
	dispatch({
		type: actionTypes.SUBMIT_SEARCH,
		payload: { movies: [], searchValue: searchValue, cache, response: { error: false, loading: true } }
	});
};
const applyMiddleware = (dispatch) => async (action) => {
	if (action.type === actionTypes.TRIGGER_ACTION) {
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
				const serverResponseJson = await serverResponse.json();
				const requests = serverResponseJson.Search.map(async (movie) => await fetch(getIdUrl(movie.imdbID)));
				const responses = await Promise.all(requests);
				const movies = await Promise.all(responses.map(async (response) => await response.json()));
				dispatchSuccess(dispatch, cache, sanitizeSearchValue, movies);
			} catch {
				dispatchFail(dispatch, cache, sanitizedSearchValue);
			}
		}
	} else {
		dispatch(action);
	}
};
export default applyMiddleware;
