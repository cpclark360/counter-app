import React, { Component } from "react";

// cc + Tab
class Counter extends Component {
  // state = {
  //   count: this.props.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  // constructor() {
  //   super();
  //   // binds 'this' to Counter class
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // Arrow functions inherit 'this'
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
