import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((count) => count + 1);
      }
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="App">
      <div>
        <Progress progress={count} color={"red"} />
      </div>
    </div>
  );
};

export default App;
