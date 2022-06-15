import { Link } from "react-router-dom";

export default function About(){
    return(
        <div className="text-start" style={{margin:"20px"}}>
            <br/>
            <h1>About Therapist Finder</h1> <br/>
            <div><p>Since inception, TherapyTribe has been passionate about using the power of the Internet to connect people in need. It is our purpose to help people find key mental health resources like therapists, support groups, wellness tools, as well as an overall sense of community. In 2006 we began by offering our members safe, convenient, easy-to-navigate tribes focused on bringing together communities of individuals suffering from various mental health illnesses, addictions and diseases. We believe that communicating, sharing, and connecting with others in your community will have a positive effect on your healing and your life.</p></div>
            <br/><Link to="/therapists"><h2>Therapist Directory – Find a Therapist</h2></Link><br/>
            <div><p>Visitors can search thousands of professional profiles by location and specialization for a list of qualified mental health providers in their area. In addition, many of our therapists offer online therapy in their state of license. Logistics should not be a deterrent to getting the professional help you deserve.</p></div>
        </div>
        )
}

