import { useState } from "react";

import "./App.css";
import Button from "./Button/Button"; // Corrected import path
import Statisics from "./Statistics/Statistics"; // Corrected import path
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statisics good={good} neutral={neutral} bad={bad} /> 

    </div>
  );
}
//TODO: 1.8: unicafe step 3 du module 3
export default App;
