import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader rtl speed={2} className="pizza-block" width={280} height={490} viewBox="0 0 280 490" backgroundColor="#dad2d2" foregroundColor="#ecebeb">
		<circle cx="143" cy="118" r="118" />
		<rect x="6" y="277" rx="10" ry="10" width="264" height="45" />
		<rect x="15" y="340" rx="10" ry="10" width="249" height="112" />
		<rect x="25" y="477" rx="0" ry="0" width="0" height="1" />
		<rect x="21" y="467" rx="0" ry="0" width="18" height="5" />
		<rect x="113" y="471" rx="0" ry="0" width="4" height="2" />
		<rect x="18" y="457" rx="10" ry="10" width="246" height="45" />
	</ContentLoader>
);

export default Skeleton;
