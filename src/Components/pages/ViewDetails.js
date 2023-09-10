import "../css/ViewDetails.css";
import { Link } from "react-router-dom";

function ViewDetails() {
  return (
    <section>
      <img src="./images/previous.jpg" alt="jpg" />
      <div id="detailsView">
        <h1>Previous Titration Details</h1>
        <form id="detailsForm">
          <div>
            <p>
              User ID : <mark>JN4348</mark>
            </p>
          </div>
          <div>
            <p>
              Indicator : <mark>Phenolphthalein</mark>
            </p>
          </div>
          <div>
            <p>
              Reaction : <mark>NaOH + HCL = NaCl + H2O</mark>
            </p>
          </div>
          <div>
            <p>
              Endpoint Volume : <mark>25cm3</mark>
            </p>
          </div>
          <div>
            <p>
              Name of the analyte : <mark>HCL</mark>
            </p>
          </div>
          <div>
            <p>
              Endpoint color change : <mark>Colorless to Pink</mark>
            </p>
          </div>
          <br />
          <br />
          <button id="button">
            <Link to="/Home">Back to Home</Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ViewDetails;
