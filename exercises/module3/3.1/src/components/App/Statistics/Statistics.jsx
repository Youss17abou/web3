const statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all ? ((good - bad) / all).toFixed(2) : 0}</p>
      <p>positive {all ? ((good / all) * 100).toFixed(2) : 0}%</p>
    </div>
  );
};
export default statistics;
