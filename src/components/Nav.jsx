import { Link } from "react-router-dom"
export default function Nav () {

    return (
        <div className="nav">
            <div className="navlinks">
                <Link to="/therapists">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}