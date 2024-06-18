import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzasArr from './assets/pizzas.json';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						{/* <Categories /> */}
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{pizzasArr.map((obj, index) => (
							<PizzaBlock key={index} title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} types={obj.types} />
						))}
						{/* <PizzaBlock title="Мексик" price="350" /> */}
						{/* <PizzaBlock test="23423423" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
