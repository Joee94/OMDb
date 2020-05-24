// @flow
import React, { useContext } from 'react';
import Cards from './cards';
import './main.css';
import Loading from './loading.svg';
import { Context } from '../../Context';

const Main = () => {
	let loadingIcon = null;
	const {
		response: { loading }
	} = useContext(Context);
	if (loading) {
		loadingIcon = (
			<object type="image/svg+xml" data={Loading}>
				svg-animation
			</object>
		);
	}
	return (
		<main>
			{loadingIcon}
			<Cards />
		</main>
	);
};

export default Main;
