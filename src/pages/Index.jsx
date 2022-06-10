import { Link } from "react-router-dom"

export default function Index ({therapists}) {
    const loaded= () =>{

        return(
            <div >
                {therapists.map(therapists => {
                    return(
                    <Link to={`/therapists/${therapists._id}`}>
                        <div key={therapists.name}>
                            <img src={therapists.portrait} alt={therapists.name} style={{maxWidth:"100px"}} />
                            <h2>{therapists.name}</h2>
                            <h4> Specialty: {therapists.tags}</h4>    
                        </div>
                    </Link>
                    )
                })}
            </div>
        )
    }
    const loading= () =>  <h1>"Loading..."</h1> 
    return (
        <div className="">
            {therapists ? loaded():loading()}
            
        </div>
    )
}