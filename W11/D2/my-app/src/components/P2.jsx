//Dynamic Parameters with useParams hook
//Dynamic Parameters are values that are taken from he URL.useParams hook helps us read those
//values inside the component
import { useParams } from "react-router-dom";
export function DynamicParamsUseParams() {
    const { id }=useParams();
    return(
        <div>
            <h2>Dynamic Params with useParams</h2>
            <p>Product ID from URL: {id}</p>
        </div>
    );
}