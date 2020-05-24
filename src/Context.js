import React, { useReducer, createContext } from 'react';
import initialState from './initialState';
import reducer from './reducer';
import applyMiddleware from './reducer/middleware';
import { useActions } from './actions';

export const Context = createContext();

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const enhancedDispatch = applyMiddleware(dispatch);
	const actions = useActions(state, enhancedDispatch);

	return <Context.Provider value={{ state, actions, enhancedDispatch }}>{children}</Context.Provider>;
};
