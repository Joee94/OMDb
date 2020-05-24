//@flow
const submit = async (state: State, event: SyntheticEvent<HTMLButtonElement>, newFilters: Filters): Promise<$Shape<State>> => {
	event.preventDefault();
	console.log(event.currentTarget);
	const newState = { filters: { ...state.filters, ...newFilters } };
	return newState;
};

export default submit;
