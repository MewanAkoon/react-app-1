import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const {
			onReset,
			onDelete,
			onIncrement,
			onDecrement,
			counters
		} = this.props;

		return (
			<React.Fragment>
				<div className='jumbotron w-50 mx-auto'>
					<button
						onClick={onReset}
						className='btn btn-outline-danger w-25 mb-4'>
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
			</React.Fragment>
		);
	}
}

export default Counters;
