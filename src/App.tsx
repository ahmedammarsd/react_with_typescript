import "./App.css";
import SayHallo from "./components/SayHallo";

function App() {
  const dummyData = {
    specilest: "Front-End Developer",
    experience: 2,
  };

  const users = [
    {
      id: 1,
      name: "ahmed",
    },
    {
      id: 2,
      name: "ammar",
    },
    {
      id: 3,
      name: "snhoory",
    },
  ];
  return (
    <>
      <SayHallo name={"ahmed"} age={24} someData={dummyData} users={users} />
    </>
  );
}

export default App;
