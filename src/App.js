import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  }
};

let progressInterval = null;

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;
// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}
function clickMe() {
  alert("You clicked me!");
}


//button stuff below
const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
Button.defaultProps = {
  theme: "blue"
};




function App() {
 
  const inputRows = useInput();
  const inputRowLength = useInput();
  let rows = inputRows.value;
  let rowLength = inputRowLength.value;
  let stitchCount = inputRowLength.value * inputRows.value;

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const incrementCounter10 = () => setCounter(counter + 10);
  const incrementCounter20 = () => setCounter(counter + 20);
  const incrementCounter50 = () => setCounter(counter + 50);
  const incrementCounter100 = () => setCounter(counter + 100);
  const incrementCounter200 = () => setCounter(counter + 200);

  const incrementCounterRow = () => setCounter(counter + (inputRowLength.value * 1));
  const incrementCounterRow10 = () => setCounter(counter + (inputRowLength.value * 10));
  const incrementCounterRow20 = () => setCounter(counter + (inputRowLength.value * 20));
  const incrementCounterRow50 = () => setCounter(counter + (inputRowLength.value * 50));
  const incrementCounterRow100 = () => setCounter(counter + (inputRowLength.value * 100));
  const incrementCounterRow200 = () => setCounter(counter + (inputRowLength.value * 200));
  let percentValue = counter / stitchCount;
  let percentage = Math.round(percentValue * 100);
  let currentRow = Math.ceil(counter/rowLength);
  let currentStitch = counter - ((currentRow-1) * rowLength);

  
  return (
    <div className="m-5">
      <h5 className="mb-3">Welcome to StitchMarked!</h5>
      <p>Number of Rows:<StyledInput {...inputRows}
        placeholder="Enter Number of Rows"/>
        Number of Stitches Per Row:<StyledInput {...inputRowLength}
        placeholder="Enter Number of Stitches Per Row"/></p>
      <span>Final Stitch Count: {stitchCount} </span>
      <p>Current Stitch Total: {counter}</p>
      <p>Current Row: {currentRow}</p>
      <p>Current Stitch in Current Row: {currentStitch}</p>
      <div className="progressBar">
       <ProgressBar now={percentage} label={`${percentage}% completed`} />
    </div>
      <p>Stitch buttons:</p>
      <Button onClick={incrementCounter}>+1</Button>
      <Button onClick={incrementCounter10}>+10</Button>
      <Button onClick={incrementCounter20}>+20</Button>
      <Button onClick={incrementCounter50}>+50</Button>
      <Button onClick={incrementCounter100}>+100</Button>
      <Button onClick={incrementCounter200}>+200</Button>
      <p>Row buttons:</p>
      <Button onClick={incrementCounterRow}>+1</Button>
      <Button onClick={incrementCounterRow10}>+10</Button>
      <Button onClick={incrementCounterRow20}>+20</Button>
      <Button onClick={incrementCounterRow50}>+50</Button>
      <Button onClick={incrementCounterRow100}>+100</Button>

    </div>
  );
}

export default App;
