import "./HomePage.css"

interface IHome{
  app: string,
  home: string,
  contactus:string,
  faq:string,
  login:string,
  

}
function HomePage({app, home, contactus, faq, login, }:IHome) {
  return (
    <>
    <div>
      <header className="Navbar">
      <div className="P2P">{app}</div>
          <nav>
            <ul>
              <li><a href="">{home}</a></li>
              <li><a href="">{contactus}</a></li>
              <li><a href="">{faq}</a></li>
              <li><a href="">{login}</a></li>

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
         <button>Get Started</button>
       </div>
      </div>
    </div>
    
      </>
    
  )
}

export default HomePage