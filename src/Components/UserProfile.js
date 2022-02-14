import axios from "axios";
import React from "react";
import { useState,useEffect,Fragment} from "react";
import { Redirect,Link } from "react-router-dom";
const UserProfile = ({match}) =>{
 
  const [rating,setRating]=useState(null);

  const [taskProvider,setTaskProvider]=useState(null);

  const submitHandler = (e) =>{

    axios.get('https://professional-developers-hub.herokuapp.com/myProfile',{

      headers : {
        'x-token' : localStorage.getItem('token')
    }
    }).then(res=>{setTaskProvider(res.data.FullName)})

    let review ={
      taskProvider,
      taskWorker:match.params.id,
      rating
    }

    axios.post('https://professional-developers-hub.herokuapp.com/addReview',review,{

      headers : {
        'x-token' : localStorage.getItem('token')
    }
    }).then(res=>{alert(res.data)})

  }
    return(
        <Fragment>
          <section className="user-pro">
        <nav className="navbar bg-dark text-white navbar-dark navbar-expand-lg p-3">
            <div className="container">
              <Link to='/Dashbord'><a href="#" className="navbar-brand text-decoration-none">
              <i className="fa fa-snowflake-o"></i>
              &nbsp; Professional Developers Hub</a></Link>
              <div className="collapse navbar-collapse dash">
                
              </div>
              <Link to={'/myProfile'}><button className="btn btn-outline-light"><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; MyProfile</button></Link>&nbsp;&nbsp;
              <Link to={'/login'}><button className="btn btn-outline-light" onClick={()=>{localStorage.removeItem('token')}}><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; LogOut</button></Link>
            </div>
        </nav>
        
        <section>
        <div className="container">
            <Link to={'/Dashbord'}><button className="mt-4 btn btn-primary">Back To Profiles</button></Link>
            <div className="row">
            <div className="col-lg-4">
                <div className="card mb-4" >
                <div className="card-body text-center">
                    <img src={`https://png.pngtree.com/png-clipart/20200225/original/pngtree-young-service-boy-vector-download-user-icon-vector-avatar-png-image_5257569.jpg`} alt="avatar" className="rounded-circle img-fluid" style={{width: "300px",height:"300px"}}/>
                    <h5 className="my-3">{match.params.FullName}</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">Bay Area, San Francisco, INDIA</p>
                <button className="btn btn-outline-primary">Contact</button>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div class="card mb-4" style={{height:"500px"}}>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{match.params.FullName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{match.params.Email}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{match.params.Mobile}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Bay Area, San Francisco, India</p>
              </div>
            </div>
            <hr/>
            <div className="row">
            <div class="col-sm-3">
                <p class="mb-0">Skills</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{match.params.Skills}</p>
              </div>
          </div>
          <hr/>
            </div>
          </div>
          
        </div>
            <div className="col-lg-4">
            <div className="card mb-4 mb-lg-4" style={{height:"500px"}}>
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">https://{match.params.FullName}.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg" style={{color: "#333333;"}}></i>
                        <p className="mb-0">{match.params.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                        <p className="mb-0">@{match.params.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                        <p className="mb-0">{match.params.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                        <p className="mb-0">{match.params.FullName}</p>
                    </li>
                    </ul>
                    <hr/>
                   
                </div>
                
                </div>
                
            </div>
            </div>
            <h3><i class="fab fa-github"></i> Reviews And Ratings</h3>
            <div className="card sea p-3 mt-3 mb-5">
              <b>Enter Your Reviews</b>
                <form onSubmit={submitHandler}>
                <input type='text' placeholder="Enter Your Rating" onChange={e=>{setRating(e.target.value)}} className="form-control mt-3" required/>&nbsp;&nbsp;
                <input type='submit' value='Add Rating' className="btn btn-outline-primary mt-3" />
                </form>
            </div>
            
        </div>
    </section>
    </section>
        </Fragment>
    )
}

export default UserProfile;