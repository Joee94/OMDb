import * as actionTypes from '../actionTypes';
import initialState from '../initialState';

import submitSearch from '../actions/submitSearch';
import replaceMissingImage from '../actions/replaceMissingImage';

const reducer = (state = initialState, action) => {
	let newState = initialState;
	switch (action.type) {
		case actionTypes.SUBMIT_SEARCH: {
			newState = submitSearch(
				action.payload.movies,
				action.payload.searchValue,
				action.payload.cache,
				action.payload.response,
				action.payload.page,
				action.payload.totalResults
			);
			break;
		}
		case actionTypes.REPLACE_MISSING_IMAGES: {
			newState = replaceMissingImage(action.payload.movies, action.payload.posterUrl);
			break;
		}
		default: {
			newState = initialState;
			break;
		}
	}
	return { ...state, ...newState };
};

export default reducer;
