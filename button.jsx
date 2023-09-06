import React, { useState } from "react";
import "./Button.css";
const Button = () => {
  // let count=0;
  let [count, setCount] = useState(0);
  const handleAdd = () => {
    //    count= count+1;
    if (count >= 10) {
      alert("Exceed");
    } else {
      setCount((count = count + 1));
      console.log(count);
    }
  };
  const handleSub = () => {
    // count=count-1;
    if (count <= 0) {
      alert("Error");
    } else {
      setCount((count = count - 1));
    }
    console.log(count);
  };
  return (
    <div>
      <h1>COUNTER</h1>
      <div className="button-container">
        <button className="action-button" onClick={handleAdd}>
          + 1
        </button>
        <p className="count">{count}</p>
        <button className="action-button" onClick={handleSub}>
          - 1
        </button>
      </div>
    </div>
  );
};

export default Button;
