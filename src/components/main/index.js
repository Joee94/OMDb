// @flow
import React, { useContext, useEffect } from 'react';
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
		loadingIcon = (
			<object type="image/svg+xml" data={Loading}>
				svg-animation
			</object>
		);
	}
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				console.log("you're at the bottom of the page");
				//show loading spinner and make fetch request to api
			}
		});
	}, []);

	return (
		<main>
			{loadingIcon}
			<Cards />
		</main>
	);
};

export default Main;
