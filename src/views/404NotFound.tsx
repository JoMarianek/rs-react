import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
        <h1>Oops!</h1>
        <h2> 404 - Page not found</h2>
        <p>The page you are looking for might have been removed, had its name changed
            or is temporary unavailable</p>
            <Link to="/">Go to Homepage</Link>
        </>
    )
}

export default PageNotFound;