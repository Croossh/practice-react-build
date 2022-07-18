import { useState, useEffect } from "react";

import RouteTest from "./RouteTest";

const HomePage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("숫자가 정상적으로 바뀜");
  }, [count]);

  const increase = () => {
    setCount(count + 1);
    console.log("increase 정상 작동함");
  };

  const decrease = () => {
    setCount(count - 1);
    console.log("decrease 정상 작동함");
    if (count <= 0) {
      setCount(0);
      console.log("숫자가 0으로 초기화 됨");
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="button">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <RouteTest />
    </div>
  );
};

export default HomePage;
