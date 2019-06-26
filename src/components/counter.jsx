import React, { Component } from "react";

// cc + Tab
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);
    // get Ajax updates based on changes in Props or State
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillMount() {
    console.log("Counter - Unmout");
    // clean up timers and etc before unmounting to prevent memory leaks
  }
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
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
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
