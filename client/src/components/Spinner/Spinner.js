import React from 'react';
import spinner from '../../assets/img/spinner.gif';

export default function Spinner() {
	return (
		<div>
			<img
				src={spinner}
				style={{
					width: '40px',
					margin: 'auto',
					display: 'block',
					backgroundColor: 'unset'
				}}
				alt="Loading..."
			/>
		</div>
	);
}
