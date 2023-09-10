import React, { useState } from "react";
import "../css/GetStart.css";
import { Link } from "react-router-dom";

function GetStart() {
  const [selectedValue, setSelectedValue] = useState("Phenolphthalein"); // Initialize the selected value
  const [selectedValue1, setSelectedValue1] = useState("HCL + NaOH"); // Initialize the selected value

  // Event handler to update the selected value when the user makes a selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Event handler to update the selected value when the user makes a selection
  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  return (
    <section>
      <img src="./images/getStarted.jpg" alt="" />
      <div id="mainView">
        <h3>Select the Indicator</h3>
        {/* <label htmlFor="dropdown">Select an option:</label> */}
        <select
          id="dropdown"
          value={selectedValue} // Set the selected value from state
          onChange={handleSelectChange} // Attach the event handler
        >
          <option value="Phenolphthalein">Phenolphthalein</option>
          <option value="Methyl Orange">Methyl Orange</option>
          <option value="Bromothymol blue">Bromothymol blue</option>
        </select>
        <p>Selected Option: {selectedValue}</p>
        <br />
        <h3>Select the reaction type</h3>
        {/* <label htmlFor="dropdown">Select an option:</label> */}
        <select
          id="dropdown"
          value={selectedValue1} // Set the selected value from state
          onChange={handleSelectChange1} // Attach the event handler
        >
          <option value="HCL + NaOH">HCL + NaOH</option>
          <option value="Na2Com3 + HCL">Na2Com3 + HCL</option>
          <option value="H2SO4 + NaOH"> H2SO4 + NaOH</option>
        </select>
        <p>Selected Option: {selectedValue1}</p>
        <br />
        <br />
        <br />
        <aside>
          <p>
            Get 0.5ml volume of the titration which is in titration flask.{" "}
            <br /> Use 2-3 drops of indicator
          </p>
        </aside>
        <br />
        <br />
        <br />
        <button>
          <Link to="/Success">START</Link>
        </button>
      </div>
    </section>
  );
}

export default GetStart;
