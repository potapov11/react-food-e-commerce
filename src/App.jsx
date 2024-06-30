import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './scss/app.scss';

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	console.log(searchValue, 'inputChanged');

	return (
		<div className="wrapper">
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className="content">
				<div className="container">
					<Outlet context={{ searchValue, setSearchValue }} />
				</div>
			</div>
		</div>
	);
}

export default App;
