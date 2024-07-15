import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setCategoryId } from '../Redux/slices/filterSlice.js';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';

export const Home = () => {
	const { categoryId, sort } = useSelector((state) => state.filter);
	// const type = useSelector((state) => state.filter);

	console.log(sort, '...sort');

	// const sortType = sort.sortType;
	const dispatch = useDispatch();

	const { searchValue } = React.useContext(SearchContext);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [currentPage, setCurrentNumber] = useState(1);

	const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
	const sortBy = sort.sortProperty.replace('-', '');
	const category = categoryId > 0 ? `category=${categoryId}` : '';
	const search = searchValue ? `search=${searchValue}` : '';

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	useEffect(() => {
		setIsLoading(true);
		axios.get(`https://6672bf766ca902ae11b19b43.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`).then((res) => {
			setIsLoading(false);
			setItems(res.data);
		});

		window.scrollTo(0, 0);
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	const pizzas = items
		.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
		.map((obj, index) => <PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />);
	const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentNumber(number)} />
		</>
	);
};

export default Home;
