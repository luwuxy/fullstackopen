import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ stats: { good, neutral, bad }, data }) => {
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  const positive = (good / data.length) * 100;

  if (data.length > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={data.length} />
          <StatisticLine text="average" value={sum / data.length || 0} />
          <StatisticLine text="positive" value={positive || 0} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = (setFeedback, feedback, value) => () => {
    setFeedback(feedback + 1);
    setData(data.concat(value));
  };

  const stats = { good, neutral, bad };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleClick(setGood, good, 1)} text="good" />
      <Button onClick={handleClick(setNeutral, neutral, 0)} text="neutral" />
      <Button onClick={handleClick(setBad, bad, -1)} text="bad" />
      <h1>statistics</h1>
      <Statistics stats={stats} data={data} />
    </>
  );
};

export default App;
