import landing from "../../assets/landing-image.png";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="logo-contents">
          <div className="logo"></div>
          <div className="logo2"></div>
          <p>Tracker</p>
        </div>

        <ul>
          <Link to="#home" style={{textDecoration:"none", color:"black"}}>
            <li>Home</li>
          </Link>
          <Link to="#about" style={{textDecoration:"none", color:"black"}}>
            <li>About</li>
          </Link>
          <Link to="#contact" style={{textDecoration:"none", color:"black"}}>
            <li>Cotact Us</li>
          </Link>
        </ul>
      </div>

      <div className="container" id="home">
        <div className="left" id="about">
          <h1>
            Lets keep <br /> track of your job applications.
          </h1>
          <p>
            Tracker is a web application that is much of a help in terms of{" "}
            <br />
            keeping track of jobs you have applied for. This is helpful because{" "}
            <br />
            you will not know which applications were a success and which were{" "}
            <br />
            not.
          </p>
          <button
            type="submit"
            className="login"
            onClick={() => {
              navigate("/SignupPage");
            }}
          >
            {" "}
            Get Started{" "}
          </button>
        </div>

        <div className="right">
          <img src={landing} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
