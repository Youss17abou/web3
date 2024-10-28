import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ClickCounter = ({ title, message }) => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleMouseEnter = () => {
    setShowMessage(true);
  };
  const handleMouseLeave = () => {
    setShowMessage(false);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        count is {count}
      </button>
      <p>{showMessage ? message : ""}</p>
    </div>
  );
};
export default ClickCounter;