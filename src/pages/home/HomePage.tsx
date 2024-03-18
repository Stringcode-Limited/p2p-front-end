import "./HomePage.css"

interface IHeader{
  app: string,
  home: string,
  contactus:string,
  faq:string,
  login:string,

}
function HomePage({app, home, contactus, faq, login}:IHeader) {
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
    </div>
    
      </>
    
  )
}

export default HomePage