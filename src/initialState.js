const initialState = {
	searchValue: '',
	response: {
		loading: false,
		error: ''
	},
	cache: {},
	filters: {
		year: 2020
	},
	movies: [],
	totalResults: 0,
	page: 1 //We know what page 1 is gonna be we can save some hassle and just set it to 2
};

export default initialState;
