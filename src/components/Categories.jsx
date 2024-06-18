import React, { useState } from 'react';
// import pizzasArr from '../assets/pizzas.json';

// console.log(pizzasArr);

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	const onClickCategory = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((value, i) => {
					return (
						<li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
							{value}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
