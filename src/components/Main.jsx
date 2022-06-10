import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Landing from "../pages/Landing"
import About from "../pages/About"

export default function Main () {
    const [therapists,setTherapists]=useState(null)
    const url = "http://localhost:3001/"
    // const url="https://therapist-rojas.herokuapp.com/"
    
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
         await console.log(`${url}therapists/review/${id}`)
        try {
            await fetch(`${url}therapists/review/${id}`,{
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
    


    useEffect(()=>{
        getTherapists()   
    },[])
    // console.log(therapists);
    
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
                    element={<Show 
                                therapists={therapists}
                                createReview={createReview}
                            />}
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