// irc + tab
import React, { Component } from "react";
import Counter from "./counter";
// 'cc' + Tab
class Counters extends Component {
  render() {
    const {
      onDelete,
      onDecrement,
      onIncrement,
      onReset,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
