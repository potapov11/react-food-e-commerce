import styles from './NotFoundBlock.module.scss';
import Header from '../Header';

console.log(styles);

export const NotFoundBlock = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className={styles.main}>
				<h1>Ничего не найдено &#128528;</h1>
				<p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет магазине</p>
			</div>
		</div>
	);
};

export default NotFoundBlock;
