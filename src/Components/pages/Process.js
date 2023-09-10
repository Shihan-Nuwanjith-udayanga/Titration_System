import "../css/Process.css";
import { Link } from "react-router-dom";

function Process() {
  return (
    <section>
      <div id="Process">
        <div id="firstDiv">
          <img src="./images/logo.png" alt="png" />
          <h1>To automate the titration process</h1>
          <button>
            <Link to="/Home">Home</Link>
          </button>
        </div>
        <div id="secondDiv">
          <div>
            <h2>
              Start Titration <br />
              Process
            </h2>
            <p>
              Through this you can access to do a new titration experiment .
            </p>
            <button>
              <Link to="/GetStart">Get Started</Link>
            </button>
          </div>
          <div>
            <h2>
              View Previous <br />
              Titration Details
            </h2>
            <p>
              Here you can see the complete details of the titrations you have
              already done.
            </p>
            <button>
              <Link to="/ViewDetails">View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
