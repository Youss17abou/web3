import "./Statistics.css";
import StatisticLines from "./StatisticLines";
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
      <div>
        <table>
          <tbody>
            <StatisticLines text="good" value={good} />
            <StatisticLines text="neutral" value={neutral} />
            <StatisticLines text="bad" value={bad} />
            <StatisticLines text="all" value={all} />
            <StatisticLines
              text="average"
              value={all ? ((good - bad) / all).toFixed(2) : 0}
            />
            <StatisticLines
              text="positive"
              value={all ? ((good / all) * 100).toFixed(2) : 0}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default statistics;
