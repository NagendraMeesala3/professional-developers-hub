import React from "react";
import { useState,useEffect,Fragment} from "react";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";
const MyProfile = () =>{


    const [data,setData] = useState([]);

    const [review,setReview] =useState([]);

    useEffect(()=>{

        axios.get(`https://professional-developers-hub.herokuapp.com/myProfile`,{

        headers : {
            'x-token' : localStorage.getItem('token')
        }
    }).then(res=>{setData(res.data)
    
        axios.get(`https://professional-developers-hub.herokuapp.com/myReview`,{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res=>{setReview(res.data)
    
        })
    
    })
},[])

if(!localStorage.getItem('token')){
    return <Redirect to={'/login'}/>
}

    return(
        <Fragment>
        <section className="user-pro">
        <nav className="navbar bg-dark text-white navbar-dark navbar-expand-lg p-3">
            <div className="container">
              <Link to='/Dashbord'><a href="" className="navbar-brand text-decoration-none">
              <i className="fa fa-snowflake-o"></i>
              &nbsp; Professionals Developers Hub</a></Link>
              <div className="collapse navbar-collapse dash">
                
              </div>
              <p className="mt-3"> <i className="fas fa-user"></i> {data.FullName}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={'/login'}><button className="btn btn-outline-light" onClick={()=>{localStorage.removeItem('token')}}><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; LogOut</button></Link>
            </div>
        </nav>
        
        <section>
        <div className="container">
        <div className="profile-bord">
            <div className="row">
            <Link to={'/Dashbord'}><button className="mt-4 btn btn-primary">Back To Profiles</button></Link>
            <div className="col-lg-4">
              
                <div className="card mb-4" >
                <div className="card-body text-center">
                    <img src={data.ProfilePic} alt="avatar" className="rounded-circle img-fluid" style={{width: "300px",height:"300px"}}/>
                    <h5 className="my-3">{data.FullName}</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">Bay Area, San Francisco, INDIA</p>
                    <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-outline-primary ms-1">Change ProfilePic</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div class="card mb-4" style={{height:"510px"}}>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{data.FullName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{data.Email}</p>
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
                <p class="text-muted mb-0">{data.Mobile}</p>
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
                <p class="text-muted mb-0">{data.Skills}</p>
              </div>
          </div>
          <hr/>
          <button type="button" className="btn btn-outline-primary ms-1 mt-5 up-pro">Update Profile</button>
            </div>
          </div>
          
        </div>
            <div className="col-lg-4">
            <div className="card mb-4 mb-lg-4" style={{height:"510px"}}>
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">https://{data.FullName}.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg" style={{color: "#333333;"}}></i>
                        <p className="mb-0">{data.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                        <p className="mb-0">@{data.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                        <p className="mb-0">{data.FullName}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                        <p className="mb-0">{data.FullName}</p>
                    </li>
                    </ul>
                    <hr/>
                    <button type="button" className="btn btn-outline-primary ms-1 mt-5 up-sco">Update Social Media</button>
                </div>
                
                </div>
                
            </div>
            </div>
          </div>
            <h3><i class="fab fa-github"></i> Reviews And Ratings</h3>
            {
                review.length >=1 ? review.map(rev =>{
                     return(
                <div className="row">
                <div className="card p-3 mt-2">
                <h4>{rev.taskProvider}</h4>
                <p>{rev.rating}/5</p>
                </div>
                 </div>
               ) 
                }): <p>No Reviews and Ratings</p>
            }
        </div>
    </section>
    </section>
        </Fragment>
    )
}

export default MyProfile;