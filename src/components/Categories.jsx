const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function Categories({ value, onChangeCategory }) {
	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, i) => {
					return (
						<li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
							{categoryName}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
