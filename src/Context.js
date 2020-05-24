import React, { useReducer, createContext } from 'react';
import initialState from './initialState';
import reducer from './reducer';
import applyMiddleware from './reducer/middleware';
import { useActions } from './actions';

export const Context = createContext();

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const movies = state.movies;
	const cache = state.cache;
	const searchValue = state.searchValue;
	const response = state.response;

	const enhancedDispatch = applyMiddleware(dispatch);
	const actions = useActions(state, enhancedDispatch);

	return (
		<Context.Provider value={{ state, actions, movies, cache, searchValue, response, enhancedDispatch }}>{children}</Context.Provider>
	);
};
