import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';
// import pizzasArr from './assets/pizzas.json';

function App() {
	fetch('https://6672bf766ca902ae11b19b43.mockapi.io/items')
		.then((response) => response.json())
		.then((data) => console.log(data));

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
						{pizzasArr.map((obj, index) => (
							<PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
