import StatisticLine from "./StatisticLines";

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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine
        text="average"
        value={all ? ((good - bad) / all).toFixed(2) : 0}
      />
      <StatisticLine
        text="positive"
        value={all ? ((good / all) * 100).toFixed(2) : 0}
      />
    </div>
  );
};
export default statistics;
