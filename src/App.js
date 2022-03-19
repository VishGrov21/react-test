import "./App.css";
import { useState } from "react";
import SummaryForm from "./pages/summary/SummaryForm";

export const replaceNameWithSpaces = (colorName = "") => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("Medium Violet Red");
  const [checkboxState, setCheckboxState] = useState(false);
  const changeColor = buttonColor === "Medium Violet Red" ? "Mednight blue" : "Medium Violet Red";
  const buttonText = `change the color to ${changeColor}`;

  const handleClick = () => {
    if (buttonColor === "Medium Violet Red") {
      setButtonColor("Mednight blue");
    } else setButtonColor("Medium Violet Red");
  };
  return (
    <div className='App'>
      <button onClick={handleClick} style={{ backgroundColor: buttonColor }} disabled={checkboxState}>
        {buttonText}
      </button>
      <input
        type='checkbox'
        data-testid='my-checkbox'
        value={checkboxState}
        onClick={() => setCheckboxState((prevValue) => !prevValue)}
      />
      <SummaryForm />
    </div>
  );
}

export default App;
