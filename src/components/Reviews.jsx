import { useState } from "react"

export default function Reviews({reviews, createReview, id, deleteReview, updateReview}){

    // let switcher = false 

    const [switcher, setSwitcher] = useState({
        boolean: false,
        id: ""
    })

    const [review, setReview] = useState({
        rating: "5",
        review: ""
    })

    const [editReview, setEditReview ] = useState({})


    // console.log(reviews)
    function handleChange(event){
        const updatedReview = {
            ...review,
            [event.target.name]: event.target.value
        }
        setReview(updatedReview)
    }

    function handleEditChange(event){
        const updatedEditReview = {
            ... editReview,
            [event.target.name]: event.target.value
        }
        setEditReview(updatedEditReview)
    }

    function handleDelete(reviewId){
        // console.log(reviewId)
        deleteReview(id, reviewId)
    }


    function handleRender({review,rating,_id}){
        // console.log(reviewId);
        setEditReview({
            rating: rating,
            review: review
        })
        //setEditState({
            // /review
            // rating
        // })
        setSwitcher({
            boolean: true,
            id: _id
        })
        // console.log(switcher);
    }

    

    function handleSubmit(event){
        event.preventDefault()
        createReview(id,review)
        setReview({
            rating: "5",
            review: ""
        })
    }

    function handleEditSubmit(event,reviewId){
        event.preventDefault()
        updateReview(id,reviewId, editReview)
        setSwitcher({
            ...switcher,
            boolean: false
        })
    }

    function reviewBody({review, rating}){
        return(
            <>
            <div className="row">
                <div className="text-end col-10">
                    <p><b> <u>Rating:{rating}</u> </b></p>
                </div>
                <div className="text-end col">
                    
                 </div>

            </div>
            <div className="col-10">
                <p style={{fontSize:"20px", textAlign:"left"}}>{review}</p>
            </div>

            </>
        )
    }


    function reviewEditForm({_id}){
        return(
            <>
                <form onSubmit={(event)=>{handleEditSubmit(event,_id)}}>
                <label htmlFor="rating">Rating</label>
                <select 
                    name="rating" 
                    id="rating"
                    value={editReview.rating}
                    onChange={handleEditChange}
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
                    value={editReview.review}
                    onChange={handleEditChange}
                />
                <button type="submit">Submit</button>
                </form>
            </>
        )
    }

    function editSpecificReviewRendering(reviewId){
        
        return switcher.boolean && switcher.id == reviewId
    }
    //changes


    return(
        <div className="review-wrapper">
            {/* <h1>Reviews</h1> */}
            {reviews.map((review,i)=>{
                return(
                    <div key={i} className="row">

                        { editSpecificReviewRendering(review._id) ? reviewEditForm(review) :reviewBody(review) }
 

                        <div className="col">
                        <button style={{margin:"10px"}} type="button" class="btn btn-success" onClick={()=>{handleRender(review)}}>edit</button>
                        <button type="button" class="btn btn-warning" onClick={()=>{handleDelete(review._id)}}>delete</button>
                        </div>
                        <hr></hr>
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