import Part from "components/Part/Part";

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} number={part.exercises}></Part>)}
    </div>
  );
};

export default Content;
