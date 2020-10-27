import React, { Component } from 'react';

import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 5 }
    ]
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const { counters } = this.state;
    counters[counters.indexOf(counter)].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value === 0 ? 0 : counters[index].value - 1;
    this.setState({ counters });
  };

  handleReset = () => {
    const { counters } = this.state;
    counters.forEach(c => c.value = 0);
    this.setState({ counters });
  };

  render() {

    return (
      <React.Fragment>
        <Navbar totalCounters={ this.state.counters.filter(c => c.value > 0).length } />
        <div className='container mt-2 text-center'>
          { this.state.counters.length === 0 && <p className='alert alert-danger'>No counters available.</p> }
          <Counters
            onReset={ this.handleReset }
            onIncrement={ this.handleIncrement }
            onDecrement={ this.handleDecrement }
            onDelete={ this.handleDelete }
            counters={ this.state.counters }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;