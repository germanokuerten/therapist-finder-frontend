import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Landing from "../pages/Landing"
import About from "../pages/About"

export default function Main ({userDB}) {


    const [therapists,setTherapists]=useState(null)
    // if(therapists)console.log(therapists[0])
   // const url = "http://localhost:3001/"
     const url="https://therapist-finder-backend.herokuapp.com/"
    
    const getTherapists= async () =>{
        const data= await fetch(url+"therapists").then(res => res.json())
        setTherapists(data)
    } 
    
    // function that posts to create a review
    // fetch the url
    // 
    /// WHY DOESN'T THIS WORK?!??!?
    // async function createReview(id,reviewData){
    //     await console.log(`${url}therapists/review/${id}`)
    // }
    const createReview = async (id,reviewData)=>{
        console.log("this",reviewData.reviewedBy)
        //  await console.log(`${url}therapists/review/${id}/user/${reviewData.reviewedBy}`)
        try {
            await fetch(`${url}therapists/review/${id}/user/${reviewData.reviewedBy}`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'Application/json'
                },
                body: JSON.stringify(reviewData)
            })
            getTherapists()
        } catch (error) {
            console.log(error)
        }
    }

    // Delete 
    const deleteReview = async (therapistId, reviewId)=>{
        try {
            await fetch(`${url}therapists/review/${therapistId}/${reviewId}`, {
                method: "DELETE",
            })    
            getTherapists()
        } catch (error) {
            console.log(error)
        }
    }

    // Update
    const updateReview = async (therapistId, reviewId, newReviewData) => {
        try {
            await fetch(`${url}therapists/review/${therapistId}/${reviewId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(newReviewData)
            })
            getTherapists()
        } catch (error) {
            console.log(error);
        }
    }

    


    useEffect(()=>{
        getTherapists()   
    },[])
    // console.log(therapists);
    
    const loaded=()=>(
       

            <Routes>
                <Route 
                    path="/"
                    element={<Landing/>}
                />
                <Route 
                    path="/therapists" 
                    element={<Index therapists={therapists} />}
                />
                <Route 
                    path="/therapists/:id" 
                    element={<Show 
                                therapists={therapists}
                                createReview={createReview}
                                deleteReview={deleteReview}
                                updateReview={updateReview}
                                userDB={userDB}
                            />}
                />
                <Route 
                    path="/about" 
                    element={<About/>}
                />
            </Routes>
        
        
    )
    const loading=()=>(<h1>loading... </h1>)

    return therapists ? loaded() : loading()
}