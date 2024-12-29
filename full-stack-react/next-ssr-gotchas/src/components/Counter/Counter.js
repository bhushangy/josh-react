"use client";
import React from "react";
import Spinner from "../Spinner/Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    setCount(parseInt(window.localStorage.getItem("saved-count")) || 0);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count === null ? <Spinner /> : count}
    </button>
  );
}

export default Counter;
