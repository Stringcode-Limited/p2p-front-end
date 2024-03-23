import { Link, Outlet } from "react-router-dom"

function HomeRouteWrapper() {
    return (
        <div>          
            <Outlet/>
        </div>  
    )
}

export default HomeRouteWrapper