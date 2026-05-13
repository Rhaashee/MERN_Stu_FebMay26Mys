//Nested Dynamic rules

import { Link,Outlet,useParams} from "react-router-dom";

export function NestedDynamicRoutes() {
    const {courseId}=useParams();
    return(
        <div>
            <h2>Nested Dynamic Routes</h2>
            <p>Course id:{courseId}</p>
            <nav>
                <Link to={`/courses/${courseId}/moudles/1`}>Module 1</Link> | {' '}
                <Link to={`/courses/${courseId}/moudles/2`}>Module 2</Link> | {' '}
                <hr />
                <Outlet/>
            </nav>
        </div>
    )
}    