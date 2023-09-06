import React, { useState } from "react";

const Use = () => {
  const [input, useInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => useInput(e.target.value)}
      />
      <h3>{input}</h3>
    </div>
  );
};

export default Use;
