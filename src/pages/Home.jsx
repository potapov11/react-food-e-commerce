import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';

export const Home = () => {
	const { searchValue } = React.useContext(SearchContext);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	// const [categoryId, setCategoryId] = useState(0);
	const [currentPage, setCurrentNumber] = useState(1);
	const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });

	const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
	const sortBy = sortType.sortProperty.replace('-', '');
	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const search = searchValue ? `search=${searchValue}` : '';

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://6672bf766ca902ae11b19b43.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`)
			.then((res) => res.json())
			.then((arr) => {
				setIsLoading(false);
				setItems(arr);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	const pizzas = items
		.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
		.map((obj, index) => <PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />);
	const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentNumber(number)} />
		</>
	);
};

export default Home;
