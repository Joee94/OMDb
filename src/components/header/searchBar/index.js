// @flow
import React, { useContext } from 'react';
import './searchBar.css';
import { Context } from '../../../Context';

const SearchBar = () => {
	const {
		state: { searchValue, cache, response, totalResults },
		actions
	} = useContext(Context);
	const searchLabel = `Search OMDb's film database`;
	let currentSearchValue = searchValue;

	const handleChange = (event) => {
		event.preventDefault();
		actions.submitSearch(currentSearchValue, cache, response, 1, totalResults);
	};
	return (
		<form className="searchBar hide-submit" onSubmit={handleChange}>
			<label>{searchLabel}</label>
			<input
				type="search" //Could this be type search- the cross poses a styling issue
				placeholder="Star Wars 2: Electric Boogaloo"
				onChange={(e) => (currentSearchValue = e.target.value)}
				disabled={response.loading ? 'disabled' : null}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default SearchBar;
