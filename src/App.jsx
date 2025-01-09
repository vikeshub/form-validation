import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";
import Form2 from "./component/Form2";
import Form3 from "./component/Form3";
import Form4 from "./component/Form4";
import Form5 from "./component/Form5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Form/> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      {/* <Form4/> */}
      <Form5 />
    </>
  );
}

export default App;
