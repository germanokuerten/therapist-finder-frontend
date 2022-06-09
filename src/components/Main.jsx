import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Landing from "../pages/Landing"
import About from "../pages/About"

export default function Main () {
    const [therapists,setTherapists]=useState(null)
    const url = "http://localhost:3001/"
    // const url="https://therapist-finder-backend.herokuapp.com/"
    const getTherapists= async () =>{
        const data= await fetch(url+"therapists").then(res => res.json())
        setTherapists(data)
    } 
    useEffect(()=>{
        getTherapists()   
    },[])
    console.log(therapists);
    
    const loaded=()=>(
        <div>
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
                    element={<Show therapists={therapists}/>}
                />
                <Route 
                    path="/about" 
                    element={<About/>}
                />
            </Routes>
        </div>
    )
    const loading=()=>(<h1>loading... </h1>)

    return therapists ? loaded() : loading()
}