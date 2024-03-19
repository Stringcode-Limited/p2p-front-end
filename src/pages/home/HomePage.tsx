import Button from "../../components/Button/Button/"
import "./HomePage.css"



// interface IHome{
//   app: string,
//   home: string,
//   contactus:string,
//   faq:string,
//   login:string,
  

// }
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
        <div className="wrapper">
       <div className="hero-text">
        <h2>Trade anywhere,<br></br>time. P2P at your Fingertips</h2>
       </div>
         <div className="seamless-text">
          <p className="seamless">Experience seamless peer-to-peer transactions.<br></br>
           Connect with ease, trade with confidence. Join P2P platform today!</p>
         </div>
         
            <Button  text="Get Started" type="normal"/>
       </div>
      </div>
    </div>
    
      </>
    
  )
}

export default HomePage