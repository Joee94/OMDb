import React, { useReducer, createContext, useCallback } from 'react';
import initialState from './initialState';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import applyMiddleware from './reducer/middleware';

export const Context = createContext();

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const movies = state.movies;
	const cache = state.cache;
	const searchValue = state.searchValue;
	const response = state.response;

	const enhancedDispatch = applyMiddleware(dispatch);

	const replaceMissingImage = useCallback(
		(posterUrl) => {
			enhancedDispatch({
				type: actionTypes.REPLACE_MISSING_IMAGES,
				payload: {
					movies,
					posterUrl
				}
			});
		},
		[enhancedDispatch]
	);

	const submitFilters = useCallback(() => {
		enhancedDispatch({
			type: actionTypes.SUBMIT_FILTERS,
			payload: {
				movies
			}
		});
	}, [enhancedDispatch]);

	const submitSearch = useCallback(
		(searchValue, cache) => {
			enhancedDispatch({
				type: actionTypes.TRIGGER_ACTION,
				payload: {
					movies,
					searchValue,
					cache
				}
			});
		},
		[enhancedDispatch]
	);

	return (
		<Context.Provider
			value={{ replaceMissingImage, submitFilters, submitSearch, movies, cache, searchValue, response, enhancedDispatch }}
		>
			{children}
		</Context.Provider>
	);
};
