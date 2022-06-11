import { Link } from "react-router-dom"

export default function Index ({therapists}) {

    //add search for therapists
    //
    // console.log(therapists)
    const loaded= () =>{

        return(
            <div >
                {therapists.map(therapists => {
                    return(
                    <Link key={therapists.name} to={`/therapists/${therapists._id}`}>
                        <div>

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