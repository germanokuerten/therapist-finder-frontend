import { Link } from "react-router-dom"
export default function Nav () {

    return (
        <nav className="row navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
              
            <Link className="navbar-brand text-start w-75" to="/">
                <img src="https://i.imgur.com/TmCE95T.png" style={{maxWidth:"4.6em", marginLeft:"1em"}} />

            Therapist finder
            </Link>
            <button className="navbar-toggler float-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               
                <div className="collapse navbar-collapse " id="navbarColor03">
                    <ul className="navbar-nav ms-auto " style={{fontSize:"1.4em", marginRight:"1em"}} >
                        <li className="nav-item test">
                            <Link className="nav-link active " to="/">Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active" to="/therapists">Therapists
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active" to="/about">About
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <div className="nav">
        //     <div className="navlinks">
        //         <Link to="/therapists">Home</Link>
        //         <Link to="/about">About</Link>
        //     </div>
        // </div>
    )
}