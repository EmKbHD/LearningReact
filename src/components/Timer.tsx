import { useEffect, useState } from "react";
import Input from "./forms/Input";

function Timer() {
  const [duration, setDuration] = useState(5);
  const [secLeft, setSecLeft] = useState(duration);

  const handleChange = (v: number) => {
    setDuration(v);
    setSecLeft(v);
  };

  console.log("render timer");

  useEffect(() => {
    const timer = setInterval(() => {
      setSecLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div>
      {/* <p>Enter a number and get the timer duration..</p> */}
      <Input
        label="Enter a number and get the timer duration.."
        value={duration}
        onChange={handleChange}
        placeholder="Change the timer..."
      />
      <p>Counter : {secLeft}</p>
    </div>
  );
}

export default Timer;
