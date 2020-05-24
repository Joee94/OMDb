const initialState = {
	searchValue: '',
	response: {
		loading: false,
		error: false
	},
	cache: {},
	filters: {
		year: 2020
	},
	movies: []
};

export default initialState;
