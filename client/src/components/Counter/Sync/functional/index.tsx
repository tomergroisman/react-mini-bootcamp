import React, { useState } from "react";

import { SyncProps } from "../../types";
import "../../Counter.css";

export const SyncCounterFunctional: React.FC<SyncProps> = (props) => {
  const { label, totalCount, onClick } = props;
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    onClick();
    setCount(count + 1);
  };

  const handleHover = () => {
    const { label } = props;
    console.log(`Clicked ${label} ${count} times`);
  };

  return (
    <div className="Counter-container sync-functional">
      <span>{totalCount}</span>
      <button onClick={handleClick} onMouseEnter={handleHover}>
        {label}
      </button>
    </div>
  );
};
