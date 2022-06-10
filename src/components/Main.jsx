import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import Index from "../pages/Index"
import Show from "../pages/Show"

export default function Main () {
    const [therapists, setTherapists]=useState(null)
    const url="https://therapist-finder-backend.herokuapp.com/"

    const getTherapists= async () =>{
        const data= await fetch(url + "therapists").then(res => res.json())
        setTherapists(data)
    } 

    // const createReview = async (therapists) =>{
    //     await fetch (url + "therapists/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(therapists),
    //     })
    //     getTherapists()
    //     console.log("therapist is: ", idtest)
    // }

    // const updateReview = async (therapist, reviewid) =>{
    //     await fetch (url + "therapists/" + reviewid, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(therapist)
    //     })
    //     getTherapists()
    // }

    // const deleteReview = async (idtest)=>{
    //     await fetch (url + idtest,{
    //         method: "DELETE",
    //     })
    //     getTherapists()
    //     console.log("id is: ", idtest)
    // }

    useEffect(()=>{
        getTherapists()   
    },[])
    
    
    return (
        <div>
            <Routes>
                <Route path="/therapists" element={
                    <Index therapists={therapists} />}>
                </Route>
                <Route path="/therapists/:id" element={
                    <Show therapists={therapists} 
                    url={url}
                    getTherapists={getTherapists}
                    // createReview={createReview} updateReview={updateReview} deleteReview={deleteReview}
                    />}
                    >
                </Route>
            </Routes>
        </div>
        
    )
}