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
                    <Show therapists={therapists}/>}>
                </Route>
            </Routes>
        </div>
        
    )
}