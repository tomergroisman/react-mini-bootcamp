import React, { Component } from "react";

import { AsyncProps, AsyncState } from "../../types";
import "../../Counter.css";

export class AsyncCounterClass extends Component<AsyncProps, AsyncState> {
  state = {
    count: 0
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { label } = this.props;
    const { count } = this.state;

    return (
      <div className="Counter-container async-class">
        <span>{count}</span>
        <button onClick={this.handleClick}>{label}</button>
      </div>
    );
  }
}
