import match from 'conditional-expression';
import * as actionTypes from '../actionTypes';
import { getSearchUrl, getIdUrl, sanitizeSearchValue } from './searchUtils';

const applyMiddleware = (dispatch) => (action) =>
	dispatch(action) ||
	match(action.type)
		.equals(actionTypes.TRIGGER_ACTION)
		.then(() => {
			const {
				payload: { searchValue, cache }
			} = action;
			const sanitizedSearchValue = sanitizeSearchValue(searchValue);
			const searchUrl = getSearchUrl(searchValue);
			dispatch({
				type: actionTypes.SUBMIT_SEARCH,
				payload: { movies: [], searchValue: sanitizedSearchValue, cache, response: { error: false, loading: true } }
			});
			if (sanitizedSearchValue in cache) {
				// If we've searched it already just load that
				dispatch({
					type: actionTypes.SUBMIT_SEARCH,
					payload: {
						movies: cache[sanitizedSearchValue],
						searchValue: sanitizedSearchValue,
						cache,
						response: { error: false, loading: false }
					}
				});
			} else {
				fetch(searchUrl)
					.then((serverResponse) => serverResponse.json())
					.then((serverResponseJson) => serverResponseJson.Search.map((movie) => fetch(getIdUrl(movie.imdbID))))
					.then((requests) => Promise.all(requests))
					.then((responses) => Promise.all(responses.map((response) => response.json())))
					.then((movies) => {
						dispatch({
							type: actionTypes.SUBMIT_SEARCH,
							payload: { movies, searchValue: sanitizedSearchValue, cache, response: { error: false, loading: false } }
						});
					})
					.catch(() =>
						dispatch({
							type: actionTypes.SUBMIT_SEARCH,
							payload: { movies: [], searchValue: sanitizedSearchValue, cache, response: { error: true, loading: false } }
						})
					);
			}
		})
		.else(null);
export default applyMiddleware;
