import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Container from "./components/Container";
import ButtonsNeeded from "./components/ButtonsNeeded";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  let [userinput, setUserInput] = useState("");
  let HandleButton = (event) => {
    if (event.target.innerText === "=") {
      setUserInput(eval(userinput));
    }
    if (event.target.innerText === "AC") {
      setUserInput("");
    }
    if (event.target.innerText !== "=" && event.target.innerText !== "AC") {
      setUserInput(userinput + event.target.innerText);
    }
  };
  let buttons = [
    "+",
    "-",
    "*",
    "/",
    "6",
    "7",
    "8",
    "9",
    "2",
    "3",
    "4",
    "5",
    "1",
    "0",
    ".",
    "AC",
    "=",
  ];
  return (
    <>
      <Container>
        <InputField userinput={userinput} />
        <div className="calculator-keys">
          <ButtonsNeeded HandleButton={HandleButton} buttons={buttons} />
        </div>
      </Container>
    </>
  );
}

export default App;
