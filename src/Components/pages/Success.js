import React, { useState, useEffect } from "react";
import "../css/Success.css";
import { Link } from "react-router-dom";

function Success() {
  //   const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user data from an API or backend server
    // fetch("https://api.example.com/users/1") // Replace with your API endpoint
    //   .then((response) => response.json())
    //   .then((data) => setUserData(data));
  }, []);

  return (
    <section>
      <img src="./images/getStarted1.jpg" alt="jpg" />
      <div id="successView">
        <h1>Your Titration is Successfully Completed!!!</h1>
        <form id="form">
          <div>
            <p>
              User ID : <mark>JN4348</mark>
            </p>
          </div>
          <div>
            <p>
              Reaction : <mark>NaOH + HCL = NaCl + H2O</mark>
            </p>
          </div>
          <div>
            <p>
              Indicator : <mark>Phenolphthalein</mark>
            </p>
          </div>
          <div>
            <p>
              Endpoint Volume : <mark>25cm3</mark>
            </p>
          </div>
          <div>
            <p>
              Endpoint Color Change : <mark>Colorless to Pink</mark>
            </p>
          </div>
          <div>
            <p>
              Name of the analyte : <mark>HCL</mark>
            </p>
          </div>
          <br/>
          <br/>
          <button>
            <Link to="/Home">SAVE</Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Success;
