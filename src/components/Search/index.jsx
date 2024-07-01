import styles from './Search.module.scss';
import React from 'react';
import { SearchContext } from '../../App';

const Search = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext);

	return (
		<div className={styles.root}>
			<svg
				className={styles.icon}
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 52.966 52.966"
				style={{
					enableBackground: 'new 0 0 52.966 52.966',
				}}>
				<path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z" />
			</svg>

			<input className={styles.input} type="text" placeholder="поиск пиццы..." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
			{searchValue.length > 0 && (
				<svg
					onClick={(e) => {
						e.stopPropagation();
						setSearchValue('');
					}}
					className={styles.clear}
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 357 357"
					style={{ enableBackground: 'new 0 0 357 357' }}>
					<g>
						<g id="clear">
							<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5 " />
						</g>
					</g>
				</svg>
			)}
		</div>
	);
};

export default Search;
