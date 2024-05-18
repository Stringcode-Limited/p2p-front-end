import NavBar from '../../../components/NavBar/NavBar';
import "./termsandRules.css"
import P2Papp from '../../../components/P2Papp/P2Papp';
import instagram from "../../../assets/images/instagram.png";
import facebook from "../../../assets/images/facebook.png"
import whatsapp from "../../../assets/images/whatsapp.png"
import twitter from "../../../assets/images/twitter.png"
import moon from "../../../assets/images/moon.png"

function TermsandRules() {
  return (
    <div className='terms-rules'>
        <NavBar />
        <div className="terms-rules-container">
            <div className="terms-rules-inner-container">
                <div className="terms-rules-text">
                    <h1>Terms & Rules</h1>
                </div>
                <div className="terms-rules-condition-statements">
                   <div className="p1">
                    <p className='terms'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id luctus mauris, eu eleifend urna. Nunc ac eros in ante facilisis facilisis. In lobortis lacinia velit a elementum. Pellentesque tempor nisl et lorem mattis commodo. Sed fringilla dui vel semper egestas. Maecenas eu ultrices ligula. Curabitur sit amet diam porta, pellentesque lacus et, interdum tellus. Nulla accumsan dolor sit amet lacinia euismod. Nullam malesuada luctus ultrices. Praesent pretium nisl tellus, non malesuada lorem accumsan sit amet. Nulla ut viverra magna. Nullam consectetur blandit lectus at suscipit.</p>
                    </div>
                    <div className="p1">
                    <p className='terms'>Donec lobortis accumsan massa dictum finibus. Phasellus euismod metus eget diam ornare, quis efficitur nibh fermentum. Nullam gravida ac nisi vitae suscipit. Pellentesque orci mauris, consequat quis gravida sed, convallis ut risus. Nullam mattis urna elit, sed dapibus justo condimentum ut. Ut hendrerit semper massa vitae iaculis. Morbi aliquam arcu sed nibh facilisis fringilla condimentum eget ipsum.</p>
                    </div>
                    <div className="p1">
                     <p className='terms'>Donec lobortis accumsan massa dictum finibus. Phasellus euismod metus eget diam ornare, quis efficitur nibh fermentum. Nullam gravida ac nisi vitae suscipit. Pellentesque orci mauris, consequat quis gravida sed, convallis ut risus. Nullam mattis urna elit, sed dapibus justo condimentum ut. Ut hendrerit semper massa vitae iaculis. Morbi aliquam arcu sed nibh facilisis fringilla condimentum eget ipsum.</p>
                    </div>
                    <div className="p1">
                    <p className='terms'> Maecenas eu ultrices ligula. Curabitur sit amet diam porta, pellentesque lacus et, interdum tellus. Nulla accumsan dolor sit amet lacinia euismod. Nullam malesuada luctus ultrices. Praesent pretium nisl tellus, non malesuada lorem accumsan sit amet. Nulla ut viverra magna. Nullam consectetur blandit lectus at suscipit.</p>
                    </div>
                </div>
                <div className="back-button"><button className='btn-back'>Back</button></div>
            </div>
            <div className="social-media-container">
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
                 <li><img src={moon} alt="" /></li>
                  </ul>
              </div>
              </div>
            </div>
            <div className="divider"></div>
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
            </div>
                 
        </div>
      
    </div>
  );
}

export default TermsandRules;
