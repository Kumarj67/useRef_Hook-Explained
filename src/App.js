import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";

function App() {
  const [input, setInput] = useState("");
  // const [counter, setCounter] = useState(0);
  // const counter = useRef(0);
  // const prevState = useRef("");
  const inputfield = useRef();
  // useEffect(() => {
  // console.log("Rendered");
  // setCounter(counter + 1);
  // counter.current = counter.current + 1;
  //   prevState.current = input;
  // }, [input]);
  const formHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = () => {
    // inputfield.current.focus();
    // inputfield.current.select();
    // inputfield.current.click();
    inputfield.current.value = "Jeetesh";
    inputfield.current.style.backgroundColor = "green";
  };
  return (
    <>
      <Header />
      {/* <input value={input} onChange={formHandler} /> */}
      <input ref={inputfield} value={input} onChange={formHandler} />
      {/* <h4>application has been rendered {counter.current} times</h4> */}
      {/* <h4>Previous State is {prevState.current}</h4> */}
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
}

export default App;
