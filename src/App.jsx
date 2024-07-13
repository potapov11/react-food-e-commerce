import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './scss/app.scss';

export const SearchContext = React.createContext(); //! Экспортируем контекст

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	//! Передаем данные необходимые в объект контекста в виде props

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className="content">
					<div className="container">
						<Outlet context={{ searchValue, setSearchValue }} />
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	);
}
//! 2шаг оборачиваем в </SearchContext.Provider>  те элементы, в которые хоти передать данные

export default App;
