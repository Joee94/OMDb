// @flow

import { SUBMIT_SEARCH } from '../actionTypes';

export const disptachInCache = (dispatch: Function, cache: Cache, searchValue: string, response: ApiResponse) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: {
			movies: cache[searchValue],
			searchValue,
			cache,
			response: { ...response, loading: false }
		}
	});
};

export const dispatchSuccess = (
	dispatch: Function,
	cache: Cache,
	searchValue: string,
	movies: Movies,
	page: number,
	totalResults: number
) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: { movies, searchValue, cache, response: { error: false, loading: false }, page, totalResults }
	});
};

export const dispatchFail = (dispatch: Function, cache: Cache, searchValue: string) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: { movies: [], searchValue, cache, response: { error: true, loading: false } }
	});
};

export const dispatchLoading = (dispatch: Function, cache: Cache, searchValue: string) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: { movies: [], searchValue, cache, response: { error: false, loading: true } }
	});
};
