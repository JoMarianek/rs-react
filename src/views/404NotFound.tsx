
import { Link } from "react-router-dom";

import styles from "./404NotFound.module.css"
const PageNotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>Oops!</h1>
            <h2> 404 - Page not found</h2>
            <p>The page you are looking for might have been removed, had its name changed
                or is temporary unavailable
            </p>
            <Link to="/">Go to Homepage</Link>
        </div>
    )
}

export default PageNotFound;