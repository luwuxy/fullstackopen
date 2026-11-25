import "./App.css";

function Header({ course }) {
  return <h3>{course}</h3>;
}

function Content({ parts }) {
  console.log(parts);

  return (
    <div>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

function Total({ parts }) {
  const exerciseTotal = parts.reduce(
    (total, current) => total + current.exercises,
    0,
  );

  return (
    <p>
      <b>total of {exerciseTotal} exercises</b>
    </p>
  );
}

function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h2>Web development curriculum</h2>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </>
  );
}

export default App;
