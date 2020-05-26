// @flow
import React, { useContext } from 'react';
import Cards from './cards';
import './main.css';
import Loading from './loading.svg';
import { Context } from '../../Context';

const Main = () => {
	let loadingIcon = null;
	const {
		state: {
			response: { loading }
		}
	} = useContext(Context);
	if (loading) {
		console.log('loading');
		loadingIcon = (
			<object type="image/svg+xml" data={Loading} className="loading">
				svg-animation
			</object>
		);
	}

	return (
		<main>
			<Cards />
			{loadingIcon}
		</main>
	);
};

export default Main;
