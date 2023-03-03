import React, { useState } from "react";
import FormList from "../FormLIst/FormList";

const Form = (props) => {
  const [enteredInput, setEnterdInput] = useState("");

  const submitHandler = (event) => {
    event.preventdefault();
    setEnterdInput("");
    props.addInputList(enteredInput);
  };

  const ChangeHandler = (event) => {
    setEnterdInput(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Todo List</h1>
      <label htmlFor="input">오늘의 할일</label>
      <br />
      <input
        id="input"
        type="text"
        placeholder="할일"
        onChange={ChangeHandler}
        value={enteredInput}
      />
      <button type="submit">클릭</button>
    </form>
  );
};

export default Form;
