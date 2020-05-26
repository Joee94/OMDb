// @flow

import { SUBMIT_SEARCH } from '../actionTypes';

export const disptachInCache = (dispatch: Function, cache: Cache, searchValue: string, response: ApiResponse) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: {
			movies: cache[searchValue].movies,
			searchValue,
			cache,
			response: { ...response, loading: false },
			page: cache[searchValue].page,
			totalResults: cache[searchValue].totalResults
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
		payload: { movies, searchValue, cache, response: { error: '', loading: false }, page, totalResults }
	});
};

export const dispatchFail = (dispatch: Function, cache: Cache, searchValue: string, error: string) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: { movies: [], searchValue, cache, response: { error, loading: false } }
	});
};

export const dispatchLoading = (dispatch: Function, cache: Cache, searchValue: string, movies: Movies) => {
	dispatch({
		type: SUBMIT_SEARCH,
		payload: { movies, searchValue, cache, response: { error: '', loading: true } }
	});
};
