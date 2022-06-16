<br />
<div align="center">
  <a href="https://github.com/germanokuerten/therapist-finder-frontend">
    <img src="https://i.imgur.com/pPryUdg.png?1" alt="Logo" width="250" height="150">
  </a>

<a href="https://github.com/germanokuerten/therapist-finder-frontend">
<h3 align="center">Therapist Finder</h3>
</a> 

  <p align="center">
    <p>Find a local Therapist today!</p>
	A Cloud Database of Therapists Around the Country!<br />
    <a href="https://bejewelled-cobbler-a0ab0a.netlify.app"><strong>Live Website (Frontend) - Therapist Finder</strong></a> <br/>
	 <a href="https://github.com/germanokuerten/therapist-finder-frontend"><strong> GitHub Link (Frontend) - Therapist Finder</strong></a> <br/>
      <a href="https://therapist-finder-backend.herokuapp.com/therapists/"><strong>Live Website (Backend) - Therapist Finder</strong></a>
    <br/>
	 <a href="https://github.com/briannag31/therapist-finder-backend"><strong> GitHub Link (Backend) - Therapist Finder</strong></a>
    <br/>
	<br/>
	CRUD Web Application built on <br/>
    <a href="https://nodejs.org/en/">Node.js</a>
    ·
    <a href="https://expressjs.com/">Express</a>
    ·
    <a href="https://www.mongodb.com/">MongoDB</a>
    ·
    <a href="https://reactjs.org/">React</a>
    ·
    <a href="https://oauth.net/2/">React Google Login</a>
  </p>
</div>

# About
Description            |  Screenshot
:---:|:----:
| <p align="left">- A cloud based web application that displays a directory of therapists where users can view and leave comments on individual therapists. <br> - Users will be able to explore therapists and view details regarding their specialties, location, background, and reviews from previous patients! <br> - Users can leave a review o therapists they have worked with previously! <br></p> | ![](https://i.imgur.com/sqM2O5p.png) | 





<p align="right">(<a href="#top">back to top</a>)</p>

# Functionality
- In this app we will access a database of therapists and display them on the index page
- User will Be able to view a directory of therapists and browse any for full information
- User will be able to sign in and leave comments on any therapist
- if user is logged in they can
        - add reviews to any therapist
        - edit any of their reviews on a therapist
        - delete any of their reviews on a therapist


# Routes
```
- get '/user/:googleId' --> allows user to sign in with their google account to acess features on page

- post '/user' --> adds new user to db

- get '/' --> renders home page

- get '/seed' -->  deletes all entries in mongodb and creates a news entries with seed data

- get '/therapists' --> renders index page ofall therapists

- get '/therapists/:id' --> renders show page and passes through users, event, and currently logged, as well as reference to other schemas in user variables, allow user to see db entry in full allow

- post '/therapists' --> will push new data to db and redirect back to index page

- delete '/therapists/:id' --> will delete db entry based on id of the db entry

- put '/therapists/:id' --> will update db entry based on id  of the db entry

- post '/therapists/review/:therapistId/user/:userId' --> pushes review schema into therapist and user redirects to show page 

- delete '/therapists/review/:therapistId/:reviewId/' --> deletes review from user and therapist

```

# Models/Schema 

Therapist/Review Schema:
```
const reviewSchema = new Schema({
    rreview: { type: String, require: true },
rating: { type: Number, min: 1, max: 5, default: 5, require: true },
    reviewedBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false }
    },
    {timestamps: true}
)

const therapistSchema = new mongoose.Schema({
    name:{ type: String, unique: true, required: true },
    description:{ type: String, required: true },
    portrait:{ type: String, required: true  },
    address:{ type: String, required: true
    },
    phoneNumber:{ type: String, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, required: true },
    tags:[String],
    latlng:[String],
    reviews: [reviewSchema]
})
```
User Schema:
```
const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: false },
    phone:{ type: String, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, required: false },
    avatar:{ type: String, required: false },
    googleId:{ type: String, required: true },
    reviewedTherapists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist'
    }]
})
```

# Current State

- User is currently able to visit the site and see a directory of therapists

- User is able to log in through React Google Login

- User is able to click on any of the therapists displayed to view their full information

- If user is logged in thier comment will reflect their Google user information

- User will be able to see all comments on each therapist


<p align="right">(<a href="#top">back to top</a>)</p>





# Roadmap and Future Implementations

- Allow users to only edit and delete only their comments

- Allow users to view a list of their comments and the therapists they have reviews in one centralized page

- Allow users to sort therapists by tags

- Allow user to create their own profile

-Allow users to leave a star rating that creates an average rating for the therapist



<p align="right">(<a href="#top">back to top</a>)</p>

# User Story

- As a user, I should be able to see directory of Therapists on Index 

- As a user, I should be able to click any of the therapists for their full description/data on index page

- As a user, On the show page I should be able to see all of the therapist's data

- As a user, On the show page I should be able add a review for the therpaist

- As a user, I should be able to log in  on the header and view and edit my reviews

<p align="right">(<a href="#top">back to top</a>)</p>

# Technologies used 

- HTML
- CSS
- JavaScript
- Google Fonts
- Heroku
- Express
- Netlify
- React
- MongoDB
- Mongoose
- Bootstrap
- Node
- React Google Login


<p align="right">(<a href="#top">back to top</a>)</p>


# Therapist Finder WireFrame and ERD

## ERD
![Model](https://i.imgur.com/dQXQMFo.png)

## Wireframes
![Index Page](https://i.imgur.com/mitheam.png)
![Show Page](https://i.imgur.com/OxamYvs.png)

<p align="right">(<a href="#top">back to top</a>)</p>
