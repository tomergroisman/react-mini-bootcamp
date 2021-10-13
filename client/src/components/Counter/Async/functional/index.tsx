import React, { useState } from "react";

import { AsyncProps } from "../../types";
import "../../Counter.css";

export const AsyncCounterFunctional: React.FC<AsyncProps> = (props) => {
  const { label } = props;
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="Counter-container async-functional">
      <span>{count}</span>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};
