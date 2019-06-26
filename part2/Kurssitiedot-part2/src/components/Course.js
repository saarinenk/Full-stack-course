import React from "react";

const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  const partlist = parts.map(i => (
    <Part key={i.id} part={i.name} exercise={i.exercises} />
  ));

  return <div>{partlist}</div>;
};

const Total = props => {
  return (
    <p>
      <b>Total of {props.number} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return course.map(c => (
    <div>
      <Header course={c.name} />
      <Content parts={c.parts} />
      <Total
        number={c.parts.reduce(function(prev, cur) {
          return prev + cur.exercises;
        }, 0)}
      />
    </div>
  ));
};

export default Course;
