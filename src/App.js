import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main'


function App() {


  const [user, setUser] = useState({})
  const [userDB, setUserDB] = useState({})
  const url = "http://localhost:3001/"
  // const url="https://therapist-rojas.herokuapp.com/"
  // console.log("this is user",user)
 
  // function createUser(e){
  //   if(Object.keys(user).length !== 0){
  //     console.log("theres a user")
  //   }else{
  //     console.log("no user");
  //   }
  // }
  console.log("main userDB",userDB)


  const getUserDB = async (sub) =>{
    console.log(url+"user/"+sub)
   const data = await fetch(url+"user/"+sub).then(res => res.json())
   setUserDB(data[0])
  }

  const createUserDB = async (user)=>{
   try {
       await fetch(`${url}user`,{
           method: 'POST',
           headers: {
               'Content-Type' : 'Application/json'
           },
           body: JSON.stringify(user)
       })
   } catch (error) {
       console.log(error)
   }
}




  function handleCallbackResponse(res){
    
    // console.log("Encoded JWT ID token: "+ res.credential)
    const userObject = jwtDecode(res.credential)
    console.log("this is the whole object",userObject)
    const { name, email, picture, sub } = userObject
    setUser({name, email, picture, sub})
    createUserDB({name,email,picture,sub})
    getUserDB(sub)
    // const data = getUserDB({googleId: sub})
    // setUserDB(data)
    //createUser({name, email, picture, jti})
    document.getElementById("signInDiv").hidden = true
  }
  
  // seperate function 
  // when user logs in grab jwt token then
  //create user in database with decoded jwt
  // function createUser(object){
  //   fetch(url+"newUser")
  // }


  function handleSignOut(event){
    setUser({})
    document.getElementById("signInDiv").hidden = false
  }


  useEffect(()=>{
    /*global google*/
    google?.accounts.id.initialize({
      client_id: "87317623296-92up46c8k7kv5pe63ert0qb7893jq87r.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google?.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { type: "standard", theme: "outline", text: "signin", shape: "circle", size: "medium"}
    );

    // createUser();
  },[])
  
 



  return (
    <div className="App">  
    {/* <div>
      <div  id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
      <button onClick={(e)=> handleSignOut(e)}> signout </button>
      }
      { user &&
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>

      }
    </div> */}
      <Header user={user}
              handleSignOut={handleSignOut}/>
     
      <Main userDB={userDB}/>
      <br/>
      <br/>
      <br/>
      

      <Footer />
    </div>
  );
}

export default App;
