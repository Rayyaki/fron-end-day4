import { useState } from "react";

export default function CustomHooks() {
  const [count, increment, decrement] = UseCounter(0, 1);
  return (
    <>
      <center>
        <div>
          <button
            style={{
              backgroundColor: "blueviolet",
              color: "orangered",
              width: "100px",
              height: "100px",
            }}
            onClick={increment}
          >
            increment
          </button>
          <h1
            style={{
              paddingLeft: "65px",
              display: "inline",
              padding: "100px",
            }}
          >
            {count}
          </h1>
          <button
            style={{
              backgroundColor: "blueviolet",
              color: "orangered",
              width: "100px",
              height: "100px",
            }}
            onClick={decrement}
          >
            decrement
          </button>
        </div>
      </center>
    </>
  );
}

function UseCounter(val, step) {
  const [count, setCount] = useState(val);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  return [count, increment, decrement];
}
