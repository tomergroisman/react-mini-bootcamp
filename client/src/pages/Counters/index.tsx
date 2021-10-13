import React, { Component } from "react";

import { Counter } from "../../components/Counter";
import "./Counters.css";

interface State {
  count: number;
}

export class Counters extends Component<{}, State> {
  state = {
    count: 0
  };

  handleSyncCounterClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="Counters-container">
        <p>Async Counters</p>
        <div>
          <Counter.Async.Class label="Async Class Component Counter" />
          <Counter.Async.Functional label="Async Functional Component Counter" />
        </div>

        <p>Sync Counters</p>
        <div>
          <Counter.Sync.Class
            label="Sync Class Component Counter"
            totalCount={count}
            onClick={this.handleSyncCounterClick}
          />
          <Counter.Sync.Functional
            label="Sync Functional Component Counter"
            totalCount={count}
            onClick={this.handleSyncCounterClick}
          />
        </div>
      </div>
    );
  }
}
