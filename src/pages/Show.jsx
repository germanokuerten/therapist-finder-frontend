import { useParams } from "react-router";
import Reviews from "../components/Reviews";

export default function Show({
  therapists,
  createReview,
  deleteReview,
  updateReview,
  userDB
}) {
  const { id } = useParams();

  const therapist = therapists?.find((therapist) => therapist._id === id);
  // console.log(therapist)

  return (
    <div className="container">
        <br />
        <br />
      <div className="row" >
        <div className="col ">
          <h1 style={{fontSize:"3em"}}>  <b>{therapist.name}</b></h1>
        </div>
        <div className="col-8">
          
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            className="img-fluid"
            src={therapist.portrait}
            alt={therapist.name}
          />
        </div>
        <div className="col-8" >
          <div className="list-group" style={{fontSize:"18px", textAlign:"left"}}>
            <div 
             
              className="list-group-item list-group-item-action flex-column align-items-start active "
            >
              <div className="d-flex w-100 justify-content-between ">
                <h5 className="mb-1 ">Specialties and Contact information </h5>
                
                <small>rating</small>
                
              </div>
              <br />
              <div className="mb-1">
                <p >

                <b>Focuses</b>: {therapist.tags.join(", ")}
                </p>
                
                <p>
                <b>Location</b>: {therapist.address}
                </p>
                <p>
                <b>Phone Number</b>: {therapist.phoneNumber}
                </p>
              </div>

              <small><b>Title</b>: m.d in psychoterapy</small>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
        <div className="row">
            <div className="col text-start">
                <h2> <b> <u>Description</u> </b> </h2>
                <br />
                <p style={{fontSize:"24px",textAlign:"left"}}>{therapist.description}</p>

            </div>
        </div>

        <br />
        <br />
        <div className="row">
        <div className="col text-start">
          <h2><b> <u>Reviews</u> </b></h2>
        </div>
        <div className="col text-end">
            <h4><b> <u>Edit or Delete Review</u> </b></h4>
        </div>
        

        </div>
        
       <Reviews
            id={id}
            reviews={therapist.reviews}
            createReview={createReview}
            deleteReview={deleteReview}
            updateReview={updateReview}
            userDB={userDB}
        />

    </div>

    // <div className="show-wrapper">
    //     <h1>{therapist.name}</h1>
    //     <div>
    //         <img style={{maxWidth:"100px"}} src={therapist.portrait} alt={therapist.name} />
    //     </div>
    //     <div className="description">
    //         <h2>About me</h2>
    //         <p>{therapist.description}</p>
    //     </div>
    //     <div className="specialties">
    //         <h2>Specialties</h2>
    //         <ul>
    //             {therapist.tags.map(tag=>{
    //                 return(
    //                     <li key={tag}>{tag}</li>
    //                 )
    //             })}
    //         </ul>
    //     </div>
    //     <div className="contact">
    //             <h2>Contact Information</h2>
    //             <p>{therapist.phoneNumber}</p>
    //             <p>{therapist.address}</p>
    //     </div>
    //     <Reviews
    //         id={id}
    //         reviews={therapist.reviews}
    //         createReview={createReview}
    //         deleteReview={deleteReview}
    //         updateReview={updateReview}
    //     />
    // </div>
  );
}
