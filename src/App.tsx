import "./App.css";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import SayHallo from "./components/SayHallo";
import Status from "./components/Status";

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
      <hr />
      <Status status="success" />
      <hr />
      <Layout>
        <Heading />
      </Layout>
    </>
  );
}

export default App;
