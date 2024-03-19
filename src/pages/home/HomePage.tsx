import Button from "../../components/Button/Button/"
import "./HomePage.css"
import iphone from "../../assets/images/iphone.png"
import cbn from "../../assets/images/cbn.png"
import ci from "../../assets/images/ci.png"
import cis from "../../assets/images/cis.png"
import fintech from "../../assets/images/fintech.png"
import firs from "../../assets/images/firs.png"
import fr from "../../assets/images/fr.png"
import fraud from "../../assets/images/fraud.png"
import sec from "../../assets/images/sec.png"
import laptop from "../../assets/images/Laptop.png"




function HomePage() {
  return (
    <>
    <div>
      <header className="Navbar">
      <div className="P2P">P2P APP</div>
          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">ContactUs</a></li>
              <li><a href="">FAQs</a></li>
              <li><a href="">Login</a></li>

            </ul>
          </nav>
      </header>
      <div className="hero-section">
        <div className="hero1">
        <div className="wrapper">
       <div className="hero-text">
        <h2>Trade anywhere,<br></br>time. P2P at your Fingertips</h2>
       </div>
         <div className="seamless-text">
          <p className="seamless">Experience seamless peer-to-peer transactions.<br></br>
           Connect with ease, trade with confidence. Join P2P platform today!</p>
         </div>
         
            <div className="btnn"><Button  text="Get Started" type="normal"/></div>
       </div>
       </div>
       <div className="hero2">
        <img className="iphone" src={iphone} alt="" />
       </div>
       
      </div>
      <div className="approved">
        <div className="sub-approved">
          <div className="rap1">
          <h1 className="due">We are duly Approved</h1>
          <p className="aff">Regulated by the Central Bank of Nigeria, licensed by Securities and Exchange Commission of Nigeria.</p>
          <p className="aff">And affiliated to all necessary bodies in Nigeria and abroad.</p>
           </div>
          <div className="logos">
            <div className="bank">
          <img className="cbn" src={cbn} alt="" />
          </div>
          <div className="se">
          <img className="sec" src={sec} alt="" />
          </div>
          <div className="fin">
          <img className="fintech" src={fintech} alt="" />
          </div>
          <div className="frod">
          <img className="fraud" src={fraud} alt="" />
          </div>
          <div className="ciso">
          <img className="cis" src={cis} alt="" />
          </div>
          <div className="fro">
          <img className="fr" src={fr} alt="" />
          </div>
          <div className="fs">
          <img className="firs" src={firs} alt="" />
          </div>
          <div className="cii">
          <img className="ci" src={ci} alt="" />
          </div>
        </div>
        </div>
       
      </div>
      <section className="about">
        <div className="about-us">
          <div className="inner-us">
            <div className="content">
             <img className="laptop" src={laptop} alt="" />
            </div>
            <div className="us">
               <div className="text-us">
                <h1 className="caption">About Us</h1>
                <p className="p2">P2Papp is your premier destination for peer-to-peer<br></br>connections and transactions. Our platfor<br></br>
                empowers individuals to connect and trade in a<br></br>secure and transperent environment.</p>
               </div>
               <div className="duty">
                <h1 className="caption">What we do</h1>
                <p className="p2">We connect individuals to exchange crypto and fiat<br></br> seamlessly. Join us in revolutionalizing the way people<br></br>
                trade, share, and grow together.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
      </>
    

  )
}

export default HomePage