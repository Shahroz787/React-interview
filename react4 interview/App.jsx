import { useState } from "react";
import "./App.css";
import Callback from "./Callback";

function App() {
  const [background, setBackground] = useState(null);

  const getcolor = (color) => {
    setBackground(color);
  };

  return (
    <>
      <div className="sqaureBox" style={{ background: `${background}` }}></div>
      <Callback getcolor={getcolor} />
    </>
  );
}

export default App;
