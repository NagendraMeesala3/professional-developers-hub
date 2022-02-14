import axios from "axios";
import React, { Fragment, useEffect, useState} from "react";
import { Link, Redirect } from "react-router-dom";
import jwt from 'jwt-decode';
let Dashbord = (props) =>{

    const [data,setData] = useState([]);

    const [Id,setUserId]=useState('');

    const [loginUserData,setLoginUserData]=useState('');

    useEffect(()=>{

        axios.get(`https://professional-developers-hub.herokuapp.com/allProfiles`,{

        headers : {
            'x-token' : localStorage.getItem('token')
        }
    }).then(res=>{setData(res.data)
    
        const user = jwt(localStorage.getItem('token'),'jwtPassword')

        setUserId(user.user.id);
    
    })
},[])

if(!localStorage.getItem('token')){
    return <Redirect to={'/login'}/>
}

    return(

        <Fragment>
        <section className="dash-bg">
        <nav className="navbar bg-dark text-white navbar-dark navbar-expand-lg p-3">
            <div className="container">
              <a href="#" className="navbar-brand">
              <i className="fa fa-snowflake-o"></i>
              &nbsp; Professional Developers Hub</a>
              <div className="collapse navbar-collapse dash">
                
              </div>
              
              <Link to={'/myProfile'}><button className="btn btn-outline-light"><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; MyProfile</button></Link>&nbsp;&nbsp;
              <Link to={'/login'}><button className="btn btn-outline-light" onClick={()=>{localStorage.removeItem('token')}}><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; LogOut</button></Link>
            </div>
        </nav>
        <section>
        <div className="container">
        <div className="dash-head">
        <h1 className="text-dark">Professional Developers Hub</h1>
        <b>Browse and Connect with Developers</b>
        </div>
        <div className="row" style={{height:'500px'}}>
            
            
            {
                data.map((user)=>{
                    return(
                
                <div className="col-4 d-flex align-items-stretch" >
                <div className="card" style={{width:"350px"}}>
                <div className="card-header">
                   <img src={user.ProfilePic} className='img-fluid pro' style={{height:'300px',width:'450px'}}/>
                </div>
                <div className="card-body ">
                
                     <h3>{user.FullName}</h3>
                     <b>Email : {user.Email}</b><br/>
                     <b>Mobile Number : {user.Mobile}</b><br/>
                     <b><label className="font-weight-bold">Skills : {user.Skills}</label></b>
                     <b><p className="font-weight-bold">Rating : <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span></p></b>
                    <hr className="text-dark bg-dark"/>
                    <button className="btn btn-outline-dark">Message</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`./UserProfile/${user._id}/${user.FullName}/${user.Email}/${user.Mobile}/${user.Skills}`}><button className="btn btn-outline-dark">View Profile</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-outline-dark  w-25">Call </button>
                </div>
            </div>
            </div>
                        
                    )
                })
            }
        </div>
        </div>
        </section>
        </section>
        </Fragment>
    )
}

export default Dashbord;