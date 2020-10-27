import React, { Component } from 'react';

class Counter extends Component {
	render() {
		return (
			<div className='mb-2'>
				<span className={this.renderTags()}>{this.props.counter.value}</span>

				<div className='btn-group ml-2'>
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className='btn btn-primary'>
						Increment
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className='btn btn-secondary mx-1'
						disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
						Decrement
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className='btn btn-danger'>
						Delete
					</button>
				</div>
			</div>
		);
	}

	renderTags() {
		const { value } = this.props.counter;
		let badgeClass = 'badge badge-';
		return (badgeClass += value === 0 ? 'warning' : 'primary');
	}
}

export default Counter;
