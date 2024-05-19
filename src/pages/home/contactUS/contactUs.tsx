import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import NavBar from "../../../components/NavBar/NavBar";
import P2Papp from "../../../components/P2Papp/P2Papp";
import "./contactUs.css";
import instagram from "../../../assets/images/instagram.png"
import facebook from "../../../assets/images/facebook.png"
import whatsapp from "../../../assets/images/whatsapp.png"
import twitter from "../../../assets/images/twitter.png"
import moon from "../../../assets/images/moon.png"

function ContactUs() {
  return (
    <>
      <div>
        <NavBar />
        <div className="contact">
          <div className="contactUs">
            <p className="cont">Contact Us</p>
            <form action="">
              <Input type="text" label="Full name" />
              <Input type="email" label="Email" />
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea className="message"></textarea>
              </div>
              <div className="button">
                <Button text="Submit" type="normal2" />
              </div>
            </form>
          </div>
        </div>
        <section className="footer">
          <div className="p2p-footer">
            <div className="layout">
              <div className="social">
                <div className="social-1">
                  <div className="social-text">
                    <h4>Social Media</h4>
                  </div>
                  <div className="social-img">
                    <div className="img1">
                      <img src={instagram} alt="" />
                    </div>
                    <div className="img2">
                      <img src={facebook} alt="" />
                    </div>
                    <div className="img3">
                      <img src={whatsapp} alt="" />
                    </div>
                    <div className="img4">
                      <img src={twitter} alt="" />
                    </div>
                  </div>
                </div>
                <div className="social-2">
                  <div className="footer-link-1">
                    <h4>User</h4>
                  </div>
                  <div className="link">
                    <ul>
                      <li>Get Started</li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
                <div className="social-3">
                  <div className="footer-link-1">
                    <h4>Company</h4>
                  </div>
                  <div className="link">
                    <ul>
                      <li>FAQs</li>
                      <li>Contact Us</li>
                      <li>Terms & Rules</li>
                    </ul>
                  </div>
                </div>
                <div className="social-4">
                  <div className="footer-link-1">
                    <h4>Theme</h4>
                  </div>
                  <div className="link">
                    <ul>
                      <li>
                        <img src={moon} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="end-footer">
                <div className="p2app">
                  <div className="app">
                    <P2Papp />
                  </div>
                  <div className="wrap-cookies">
                    <div className="copy">&copy;2024 P2P App</div>
                    <div className="cooky">
                      <p className="cookies">Cookies settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="end-footer2">
          <div className="p2app">
            <div className="app">
              <P2Papp />
            </div>
            <div className="wrap-cookies">
              <div className="copy">&copy;2024 P2P App</div>
              <div className="cooky">
                <p className="cookies">Cookies settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
