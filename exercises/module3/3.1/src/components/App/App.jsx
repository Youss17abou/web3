import { useState } from "react";

import "./App.css";
import Button from "../Button/Button"; // Corrected import path
import Statisics from "../Statistics/Statistics"; // Corrected import path
import Loading from "../Loading/Loading";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  if (loading) return <Loading />;

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
export default App;
