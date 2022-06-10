import { useState } from "react";


export default function Reviews({reviews, createReview, updateReview, deleteReview}){

    function handleDelete(){

    }
    function handleEdit(){

    }
    function handleSubmit(){

    }
    function handleChange(){

    }
    // const [newForm, setNewForm] = useState({
    //     review: ""
    // })
    // const [editForm, setEditForm] = useState(reviews._id) 

    // function handleDelete(){
    //     deleteReview(reviews._id);
    // }
    // function handleEdit(event){
    //     setEditForm((prevState)=>({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }))
    // }
    // const handleChange = (event)=>{
    //     setNewForm((prevState)=>({
    //         ...prevState,
    //         [event.target.name]: event.target.value,
    //     }))
    // }
    // function handleSubmit(event){
    //     event.preventDefault()
    //     createReview(newForm)
    //     setNewForm({
    //         review: ""
    //     })
    // }

    // const handleSubmitEdit = (event)=>{
    //     event.preventDefault()
    //     updateReview(editForm, reviews._id)
    // }


    return(
        <div className="review-wrapper">
            <h1>Reviews</h1>
            {reviews.map((review)=>{
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