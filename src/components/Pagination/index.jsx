import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ currentPage, onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(e) => {
				onChangePage(e.selected + 1);
				console.log(e.selected);
			}}
			pageRangeDisplayed={8}
			pageCount={3}
			forcePage={currentPage - 1}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
};
