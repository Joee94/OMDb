// @flow
import React, { useContext } from 'react';
import './searchBar.css';
import { Context } from '../../../Context';

const SearchBar = () => {
	const {
		submitSearch,
		response: { loading },
		searchValue,
		cache
	} = useContext(Context);
	const searchLabel = `Search OMDb's film database`;
	let currentSearchValue = searchValue;

	const handleChange = (event) => {
		event.preventDefault();
		submitSearch(currentSearchValue, cache);
	};
	return (
		<form className="searchBar hide-submit" onSubmit={handleChange}>
			<label>
				{searchLabel}
				<input
					type="search" //Could this be type search- the cross poses a styling issue
					placeholder="Star Wars 2: Electric Boogaloo"
					onChange={(e) => (currentSearchValue = e.target.value)}
					disabled={loading ? 'disabled' : null}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default SearchBar;
