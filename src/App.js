import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

const App = React.memo(() => {
	return (
		<div className="main">
			<Header />
			<Main />
		</div>
	);
});

App.displayName = 'App';

export default App;
