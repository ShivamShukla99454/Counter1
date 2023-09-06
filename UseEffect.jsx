import React, { useEffect, useState } from "react";

function Use1() {
  const [num, setNum] = useState(0);

  const [num2, setNum2] = useState(0);
  useEffect(() => {
    alert("i am clicked");
  });
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  useEffect(() => {
    alert("i am clicked");
  });
  const [num5, setNum5] = useState(0);
  return (
    <div>
      <button
        on
        onClick={() => {
          setNum(num + 1);
        }}
        style={{ padding: "20px" }}
      >
        click here{num}
      </button>

      <button
        on
        onClick={() => {
          setNum2(num2 - 1);
          // alert('i am clicked');
        }}
        style={{ padding: "20px", backgroundColor: "blueviolet" }}
      >
        click here{num2}
      </button>

      <button
        on
        onClick={() => {
          setNum3(num3 - 1);
          // alert('i am clicked');
        }}
        style={{ padding: "20px" }}
      >
        click here{num3}
      </button>

      <button
        on
        onClick={() => {
          setNum4(num4 + 1);
          // alert('i am clicked');
        }}
        style={{ padding: "20px", backgroundColor: "blueviolet" }}
      >
        click here{num4}
      </button>

      <button
        on
        onClick={() => {
          setNum5(num5 + 1);
          // alert('i am clicked');
        }}
        style={{ padding: "20px" }}
      >
        click here{num5}
      </button>
    </div>
  );
}

export default Use1;
