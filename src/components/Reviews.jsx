import { useState } from "react"

export default function Reviews({reviews, createReview, id, deleteReview, updatedReview}){
    const [review, setReview] = useState({
        rating: "5",
        review: ""
    })
    // console.log(reviews)
    function handleChange(event){
        const updatedReview = {
            ...review,
            [event.target.name]: event.target.value
        }
        setReview(updatedReview)
    }

    function handleDelete(reviewId){
        // console.log(reviewId)
        deleteReview(id, reviewId)
    }
    function handleEdit(reviewId){
        
    }
    // console.log(review)
    // console.log(id)
    function handleSubmit(event){
        event.preventDefault()
        createReview(id,review)
        setReview({
            rating: "5",
            review: ""
        })
    }

    return(
        <div className="review-wrapper">
            <h1>Reviews</h1>
            {reviews.map((review,i)=>{
                return(
                    <div key={i} className="review-card">
                        <p>{review.review}</p>
                        <div className="review-stars">
                        <p>{review.rating}</p>
                        </div>
                        <button onClick={handleEdit}>edit</button>
                        <button onClick={()=>{handleDelete(review._id)}}>delete</button>
                    </div>
                )
            })}
            <br />
            <br />
            <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rating</label>
                <select 
                    name="rating" 
                    id="rating"
                    value={review.rating}
                    onChange={handleChange}
                >
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
                    placeholder="review"
                    value={review.review}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>           
            </form>
        </div>
        
    )
}