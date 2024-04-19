import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import SayHallo from "./components/SayHallo";
import Status from "./components/Status";
import Input from "./components/Input";
import Container from "./components/Container";
import Products from "./components/Products";

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

  const [showText, setShowText] = useState(true);
  const [inputValue, setInputValue] = useState<string>("");

  const dummyProductsData = [
    {
      id: 1,
      name: "Product1",
      price: 12,
      desc: "This is Product 1",
    },
    {
      id: 2,
      name: "Product2",
      price: 12,
      desc: "This is Product 2",
    },
    {
      id: 3,
      name: "Product3",
      price: 32,
      desc: "This is Product 3",
    },
    {
      id: 4,
      name: "Product4",
      price: 42,

      desc: "This is Product 4",
    },
  ];
  return (
    <>
      <SayHallo name={"ahmed"} age={24} someData={dummyData} users={users} />
      <hr />
      {/* ====================================================== */}
      <Status status="success" />
      <hr />
      {/* ====================================================== */}
      <Layout>
        <Heading />
      </Layout>
      <hr />
      {/* ====================================================== */}
      <Button
        handleClick={(e) => {
          e.preventDefault();
          setShowText(!showText);
        }}
        text={showText ? "Hide Title" : "Show Title"}
      />
      {showText && <p>Text Lesson 7 - Events Props</p>}
      <br />
      <Input
        value={inputValue}
        handleChange={(e) => setInputValue(e.target.value)}
      />{" "}
      {inputValue}
      {/* ====================================================== */}
      <hr />
      <br />
      <p>Lesson 8 - Style Props</p>
      <Container styles={{ color: "red" }} />
      {/* ====================================================== */}
      <hr />
      <br />
      <p>Lesson 9 - Export Types</p>
      <Products productsData={dummyProductsData} />
    </>
  );
}

export default App;
