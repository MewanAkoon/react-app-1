import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const { counter, onIncrement, onDecrement, onDelete } = this.props;

		return (
			<div className='mb-2'>
				<span className={this.renderTags()}>{counter.value}</span>

				<div className='btn-group ml-2'>
					<button
						onClick={() => onIncrement(counter)}
						className='btn btn-primary'>
						Increment
					</button>
					<button
						onClick={() => onDecrement(counter)}
						className='btn btn-secondary mx-1'
						disabled={counter.value === 0}>
						Decrement
					</button>
					<button
						onClick={() => onDelete(counter.id)}
						className='btn btn-danger'>
						Delete
					</button>
				</div>
			</div>
		);
	}

	renderTags() {
		let badgeClasses = 'badge badge-';
		badgeClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
		return badgeClasses;
	}
}

export default Counter;
