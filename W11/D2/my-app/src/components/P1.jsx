//Nested Routers
//A route inside another route
//Dashboard - profile/setting/reports
import { Link,Outlet } from "react-router-dom";
export function NestedRouter() {
    return(
        <div>
            <h2>Nested Router</h2>
            <nav>
                <Link to="/dashboard">Home</Link> | {' '}
                <Link to="/dashboard/profile">Profile</Link> | {' '}
                <Link to="/dashboard/settings">Settings</Link> | {' '}
                <hr />
                {/* <Outlet/> is the place where match child routers will render */}
                {/* without outlet ,child routes will not appear inside the parent layout */}
                <Outlet/>
            </nav>
        </div>
    )   
}        
