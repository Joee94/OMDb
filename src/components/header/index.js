// @flow
import React from 'react';
import './header.css';
import Title from './title';
import SearchBar from './searchBar';

const Header = () => {
	return (
		<header className="header">
			<Title />
			<SearchBar />
		</header>
	);
};

export default Header;
