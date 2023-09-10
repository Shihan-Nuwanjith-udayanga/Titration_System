import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div id="header">
        <aside>
          <img src="./images/logo.png" alt="png" />
        </aside>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="">Service</Link>
            </li>
            <li>
              <Link to="">Projects</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main">
        <div id="textAreaDiv">
          <h1>
            Automated <br /> Titration System
          </h1>
          <button>
            <Link to="/Process">Get Started</Link>
          </button>
          <button>
            <Link to="/Process">View More</Link>
          </button>
          <img src="./images/homeBackground.jpg" alt="jpg" />
        </div>
        <div id="imageDiv">
          <img src="./images/background1.png" alt="png" />
        </div>
      </div>
      <div id="footer">
        <h5>
          Copyright @2023 Automated Titration System | Developed by SPARTAN GROUP
        </h5>
      </div>
    </section>
  );
}

export default Home;
