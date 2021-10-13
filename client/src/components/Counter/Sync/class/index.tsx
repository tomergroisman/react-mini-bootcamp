import React, { Component } from "react";

import { SyncProps, SyncState } from "../../types";
import "../../Counter.css";

export class SyncCounterClass extends Component<SyncProps, SyncState> {
  state = {
    count: 0
  };

  handleClick = () => {
    const { onClick } = this.props;
    const { count } = this.state;
    onClick();
    this.setState({ count: count + 1 });
  };

  handleHover = () => {
    const { count } = this.state;
    const { label } = this.props;
    console.log(`Clicked ${label} ${count} times`);
  };

  render() {
    const { totalCount, label } = this.props;

    return (
      <div className="Counter-container sync-class">
        <span>{totalCount}</span>
        <button onClick={this.handleClick} onMouseEnter={this.handleHover}>
          {label}
        </button>
      </div>
    );
  }
}
