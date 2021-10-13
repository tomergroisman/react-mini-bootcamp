import React from "react";

import "./Greeter.css";

export function Greeter() {
  const getGreet = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 6) return "Good Night";
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Night";
  };

  return (
    <div className="Greeter-container">
      <h1>{getGreet()}</h1>
      <input type="text" />
    </div>
  );
}
