import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"

export default function Main () {
    const [therapists,setTherapists]=useState(null)
    const url="https://therapist-finder-backend.herokuapp.com/"
    const getTherapists= async () =>{
        const data= await fetch(url+"therapists").then(res => res.json())
        setTherapists(data)
    } 

    const createReview = async (therapists, id) =>{
        await fetch (URL+"therapists"+id, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(therapists),
        })
        getTherapists()
    }

    const updateReview = async (therapists, id) =>{
        await fetch (URL+"therapists"+id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(therapists)
        })
        getTherapists()
    }

    const deleteReview = async (id)=>{
        await fetch (URL+"therapists"+id,{
            method: "DELETE",
        })
        getTherapists()
    }

    useEffect(()=>{
        getTherapists()   
    },[])
    console.log(therapists);
    
    return (
        <div>
            <Routes>
                <Route path="/therapists" element={
                    <Index therapists={therapists} />}>
                </Route>
                <Route path="/therapists/:id" element={
                    <Show therapists={therapists} createReview={createReview} updateReview={updateReview} deleteReview={deleteReview}/>}>
                </Route>
            </Routes>
        </div>
        
    )
}