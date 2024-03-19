import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div>
        <NavBar />
        <div className="hero-section">
          <div className="wrapper">
            <div className="hero-text">
              <h2>
                Trade anywhere,<br></br>time. P2P at your Fingertips
              </h2>
            </div>
            <div className="seamless-text">
              <p className="seamless">
                Experience seamless peer-to-peer transactions.<br></br>
                Connect with ease, trade with confidence. Join P2P platform
                today!
              </p>
            </div>

            <Button text="Get Started" type="normal" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
