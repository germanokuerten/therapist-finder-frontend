import { useState } from "react";

export default function Reviews({
  reviews,
  createReview,
  id,
  deleteReview,
  updateReview,
  userDB
}) {
  // let switcher = false
  console.log(userDB._id)
  const [switcher, setSwitcher] = useState({
    boolean: false,
    id: "",
  });

  const [review, setReview] = useState({
    rating: "5",
    review: "",
    reviewedBy:""
  });

  const [editReview, setEditReview] = useState({});

  // console.log(reviews)
  function handleChange(event) {
    const updatedReview = {
      ...review,
      [event.target.name]: event.target.value,
    };
    setReview(updatedReview);
  }

  function handleEditChange(event) {
    const updatedEditReview = {
      ...editReview,
      [event.target.name]: event.target.value,
    };
    setEditReview(updatedEditReview);
  }

  function handleDelete(reviewId) {
    // console.log(reviewId)
    deleteReview(id, reviewId);
  }

  function handleRender({ review, rating, _id }) {
    // console.log(reviewId);
    setEditReview({
      rating: rating,
      review: review,
    });
    //setEditState({
    // /review
    // rating
    // })
    setSwitcher({
      boolean: true,
      id: _id,
    });
    // console.log(switcher);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createReview(id, review);
    setReview({
      rating: "5",
      review: "",
      reviewedBy: ""
    });
  }

  function handleEditSubmit(event, reviewId) {
    event.preventDefault();
    updateReview(id, reviewId, editReview);
    setSwitcher({
      ...switcher,
      boolean: false,
    });
  }

  function reviewBody({ review, rating, reviewedBy }) {
    return (
      <>
        <div className="row">
          <div className="text-start col-10">
            <img className="text-start rounded-circle" style={{width: "100px"}} src={reviewedBy?.avatar} alt={reviewedBy?.name} />
            <p>{reviewedBy?.name}</p>
            
          </div>
          <div className="text-end col">
          <p>
              <b>
                <u>Rating:{rating}</u>
              </b>
            </p>
          </div>
        </div>
        <div className="col-10">
          <p style={{ fontSize: "20px", textAlign: "left" }}>{review}</p>
        </div>
      </>
    );
  }

  function reviewEditForm({ _id }) {
    return (
      <>
        <div className="row">
          <form
            onSubmit={(event) => {
              handleEditSubmit(event, _id);
            }}
          >
            <div className="col">
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4"></label>
                <textarea
                  type="text"
                  name="review"
                  placeholder="review"
                  value={editReview.review}
                  onChange={handleEditChange}
                  className="form-control"
            id="exampleTextarea"
            rows="3"
                ></textarea>
              </div>
            </div>

            <div className="col text-start">
              <label htmlFor="exampleSelect1" className="form-label mt-2 ">
                <h2>Rating </h2>
              </label>
              <select
                className="form-select"
                name="rating"
                id="exampleSelect1"
                value={editReview.rating}
                onChange={handleEditChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }

  function editSpecificReviewRendering(reviewId) {
    return switcher.boolean && switcher.id === reviewId;
  }
  //changes

  return (
    <div className="review-wrapper">
      {/* <h1>Reviews</h1> */}
      {reviews.map((review, i) => {
        return (
          <div key={i} className="row">
            
            {editSpecificReviewRendering(review._id)
              ? reviewEditForm(review)
              : reviewBody(review)}

            <div className="col">
              <button
                style={{ margin: "10px" }}
                type="button"
                className="btn btn-success"
                onClick={() => {
                  handleRender(review);
                }}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  handleDelete(review._id);
                }}
              >
                delete
              </button>
            </div>
            <hr></hr>
          </div>
        );
      })}
      <br />
      <br />
      <h2 className="text-start">
        
        <u>Write a Review</u>
      </h2>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleTextarea" className="form-label mt-4"></label>
              <textarea
                type="text"
                name="review"
                placeholder="Write a review"
                value={review.review}
                onChange={handleChange}
                className="form-control"
                id="exampleTextarea"
                rows="3"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="col text-start">
            <label htmlFor="exampleSelect1" className="form-label mt-2 ">
              <h2>Rating </h2>
            </label>
            <select
              className="form-select"
              id="exampleSelect1"
              name="rating"
              value={review.rating}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            
            <input type="hidden" name="reviewedBy" value={review.reviewedBy = userDB._id}/>
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        
      </div>
      <br />
    </div>
  );
}
