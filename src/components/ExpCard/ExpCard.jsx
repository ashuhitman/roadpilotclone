import React, { useEffect, useState } from "react";
import "./ExpCard.css";
import { useInView } from "react-intersection-observer";

function ExpCard({ total, customerType }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  if (inView && count === 0) {
    // Start counting only when the component is in view for the first time
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < total) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return prevCount;
      });
    }, 10);
  }

  return (
    <div className="exp-card" ref={ref}>
      <div className="content">
        <h2>{count}+</h2>
        <h2>{customerType}</h2>
      </div>
    </div>
  );
}

export default ExpCard;
