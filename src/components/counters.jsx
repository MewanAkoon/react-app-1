import React from 'react';
import Counter from './counter';

const Counters = ({
	onReset,
	onDelete,
	onIncrement,
	onDecrement,
	counters
}) => {
	return (
		<div className={getContainerClasses(counters.length)}>
			<button onClick={onReset} className='btn btn-outline-danger w-25 mb-4'>
				Reset
			</button>
			{counters.map(counter => (
				<Counter
					key={counter.id}
					onDelete={onDelete}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
					counter={counter}
				/>
			))}
		</div>
	);
};

const getContainerClasses = totalCounters => {
	let classes = 'jumbotron w-50 mx-auto';
	if (totalCounters === 0) classes += ' d-none';
	return classes;
};

export default Counters;
