import { Link } from 'react-router-dom'

export default function Landing(){
    return(
      // <!-- Carousel -->
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner img-fluid">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Los Angeles" class="d-block w-100"/>
      <div class="carousel-caption">
      <h3 style={{color: "black"}}>Therapist Finder</h3>
      <p style={{color: "black"}}>Get your code together!</p>
      <Link to="/therapists">
      <button className="btn btn-primary">Find Your Therapist</button>
      </Link>
  </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Chicago" class="d-block w-100"/>
      <div class="carousel-caption">
      <h3>Therapist Finder</h3>
      <p>You deserve a better life!</p>
      <Link to="/therapists">
      <button className="btn btn-primary">Find Your Therapist</button>
      </Link>
  </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="New York" class="d-block w-100"/>
      <div class="carousel-caption">
      <h3>Therapist Finder</h3>
      <p>You deserve a better life!</p>
      <Link to="/therapists">
      <button className="btn btn-primary">Find Your Therapist</button>
      </Link>
  </div>
    </div>
  </div>

  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
    )
}