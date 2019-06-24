import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = props => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const avg = all ? (good + -1 * bad) / all : 0;

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={all} />
        <Statistic text="Average" value={avg} />
        <Statistic
          text="Positive"
          value={all ? (good / all) * 100 + " %" : 0}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>Feedback here</h1>
      <div>
        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
        <h1>Statistics</h1>
        {all ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
