import { useState } from "react";
import Form from "./components/Form/Form";
import FormList from "./components/FormLIst/FormList";

function App() {
  const [inputList, setInputList] = useState([]);

  const addInputList = (userInput) => {
    setInputList((preventInput) => {
      return [
        ...preventInput,
        { input: userInput, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Form addInputList={addInputList} />
      <FormList users={inputList} />
    </div>
  );
}

export default App;
