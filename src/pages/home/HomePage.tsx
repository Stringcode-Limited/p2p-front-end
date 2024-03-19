import Button from "../../components/Button/Button/"
import "./HomePage.css"
import iphone from "../../assets/images/iphone.png"




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
          <h1 className="due">We are duly Approved</h1>
          <p>Regulated by the Central Bank of Nigeria, licensed by Securities and Exchange Commission of Nigeria.</p>
          <p className="aff">And affiliated to all necessary bodies in Nigeria and abroad.</p>
        </div>
      </div>
    </div>
    
      </>
    

  )
}

export default HomePage