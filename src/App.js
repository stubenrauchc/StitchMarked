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
let percentValue = 0;
let percentage = Math.round(percentValue);
const inputRows = useInput();
const inputRowLength = useInput();

let stitchCount = inputRowLength.value * inputRows.value;
function increment(){
  percentValue + 1;
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
  const [progress, setProgress] = useState(0);





  return (
    <div className="m-5">
      <h5 className="mb-3">Georgies Crochet Progress Bar!</h5>
      <StyledInput
        {...inputRows}
        placeholder="Enter Row Count in here"/>
              <StyledInput
        {...inputRowLength}
        placeholder="Enter Row Length in here"/>
      <span>Stitch Count: {stitchCount} </span>
      <p>Project Progress</p>
      <div className="progressBar">
       <ProgressBar now={percentage} label={`${percentage}% completed`} />
    </div>
      <p>Row buttons:</p>
      <Button onClick={increment}>+1</Button>
      <Button onClick={clickMe}>+10</Button>
      <Button onClick={clickMe}>+20</Button>
      <Button onClick={clickMe}>+50</Button>
      <Button onClick={clickMe}>+100</Button>
      <p>stitch buttons:</p>
      <Button onClick={clickMe}>+1</Button>
      <Button onClick={clickMe}>+10</Button>
      <Button onClick={clickMe}>+20</Button>
      <Button onClick={clickMe}>+50</Button>
      <Button onClick={clickMe}>+100</Button>
      <Button onClick={clickMe}>+200</Button>
    </div>
  );
}

export default App;
