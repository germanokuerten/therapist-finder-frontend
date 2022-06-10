import { useState } from "react";


export default function Reviews({reviews,
    //  createReview, updateReview, deleteReview,
      url}){
    
        const[rvws, setRvws]=useState(null)

        const getReviews= async () =>{
            const rvwsData= await fetch(url + "therapists").then(res => res.json())
            setRvws(rvwsData)
        } 
    const createReview = async (rvws) =>{
        await fetch (url + "therapists/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(rvws),
        })
        getReviews()
        console.log("therapist is: ", rvws)
    }

    const updateReview = async (rvws, id) =>{
        await fetch (url + "therapists/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(rvws)
        })
        getReviews()
    }

    const deleteReview = async (id)=>{
        await fetch (url + id,{
            method: "DELETE",
        })
        getReviews()
        console.log("id is: ", id)
    }
    // function handleDelete(){

    // }
    // function handleEdit(){

    // }
    // function handleSubmit(){

    // }
    // function handleChange(){

    // }
    const [newForm, setNewForm] = useState({
        review: "hello",
        rating: 5
    })
    const [editForm, setEditForm] = useState(reviews._id) 

    // function handleDelete(){
    //     deleteReview(reviews._id);
    // }
    console.log(reviews.review)

    function handleEdit(event){
        setEditForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleChange = (event)=>{
        setNewForm((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
        createReview(newForm)
        setNewForm({
            review: "",
            rating: 5
        })
    }

    const handleSubmitEdit = (event)=>{
        event.preventDefault()
        updateReview(editForm, reviews._id)
    }


    return(
        <div className="review-wrapper">
            <h1>Reviews</h1>
            {reviews.map((review)=>{
                function handleDelete(){
                    deleteReview(review._id);
                }
                return(
                    <div key={review._id} className="review-card">
                        <p>{review.review}</p>
                        <div className="review-stars">
                            <p>{review.rating}</p>
                        </div>
                        <button onClick={handleEdit}>edit</button>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                )
            })}
            <br />
            <br />
            <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rating</label>
                <select name="rating" value={reviews.rating} id="rating" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <br />
                <input 
                    type="text"
                    name="review"
                    value={reviews.review}
                    placeholder="review"
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>           
            </form>
        </div>
    )
}