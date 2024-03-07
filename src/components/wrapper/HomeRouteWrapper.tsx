import { Link, Outlet } from "react-router-dom"

function HomeRouteWrapper() {
    return (
        <div>
            <header style={{ backgroundColor: "royalblue" }}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </header>
            
            <Outlet/>
        </div>
    )
}

export default HomeRouteWrapper