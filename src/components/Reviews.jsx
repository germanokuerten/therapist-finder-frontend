export default function Reviews({reviews}){

    

    function handleDelete(){

    }
    function handleEdit(){

    }
    function handleSubmit(){

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
                            <p>{review._id}</p>
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
                <select name="rating" id="rating">
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
                />
                <button type="submit">Submit</button>           
            </form>
        </div>
        
    )
}