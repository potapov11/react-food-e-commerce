import React, { useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import './scss/app.scss';

function App() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		fetch('https://6672bf766ca902ae11b19b43.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setIsLoading(false);
				setItems(arr);
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{isLoading
							? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
							: items.map((obj, index) => <PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
