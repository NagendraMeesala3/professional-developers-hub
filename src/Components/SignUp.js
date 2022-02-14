import axios from "axios";
import React, { Fragment, useState } from "react";
import {Link,Redirect} from 'react-router-dom'
let SignUP = () =>{

    const [auth,setAuth] = useState(false)

    const [data,setData] = useState({

        FullName:'',
        Email:'',
        Mobile:'',
        Skills:'',
        Password:'',
    })

    const [loading,setLoading]=useState(false);

    const[imgUrl,setImgUrl]=useState('');


    let imgHandler = async(e) =>{ 

        let cloudName =`doutsozxy`;

        const files=e.target.files

        const data =new FormData()

        data.append('file',files[0])

        data.append('upload_preset','empImages')
        
        setLoading(true);

        const res=await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,{
            method:'post',
            body:data
        })

        const file =await res.json();

        setImgUrl(file.secure_url);

        console.log(file.secure_url);
        
        setLoading(false);
    
    }

    const changeHandler = (e) =>{

        setData({...data,[e.target.name]:e.target.value})

    }

    const submitHandler = (e) =>{


        e.preventDefault();

        axios.post(`https://professional-developers-hub.herokuapp.com/register`,data).then(()=>{alert('Successfully Registered')
    
        setAuth(true);
    
    })

    
    }

    if(auth){

        return <Redirect to={`/Dashbord`}/>
    }


    return(

        <Fragment>
            <nav className="navbar bg-dark text-white navbar-dark navbar-expand-lg p-3">
            <div className="container">
              <a href="#" className="navbar-brand">
              <i className="fa fa-snowflake-o"></i>
              &nbsp; Professionals HUB</a>
              <div className="collapse navbar-collapse">
                
              </div>
              <Link to={'/login'}><button className="btn btn-outline-light"><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; LogIn</button></Link>&nbsp;&nbsp;
              
            </div>
        </nav>
            <section className="signup">

            <div className="signup-form">
                <form onSubmit={submitHandler}>
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                    <div className="form-group">
                       <input type="file" className="form-control"  onChange={imgHandler}/>
                    </div> 
                        <div className="row">
                            <div className="col"><input type="text" className="form-control" name="FullName" placeholder="Full Name" required  onChange={changeHandler}/></div>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="Email" placeholder="Email" id="email" required onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" name="Mobile" placeholder="Mobile Number" id="email" required onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="Password" placeholder="Password" id="password" required onChange={changeHandler}/>
                       
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password"  id="c-password" required/>
                        
                    </div>  
                    <div className="form-group">
                        <input type="text" className="form-control" name="Skills" placeholder="Skills" onChange={changeHandler} required/>&nbsp;
                        <label>Please enter skills by separation of coma (,)</label>
                    </div> 
                     
                    <div className="form-group">
                        <label className="form-check-label"><input type="checkbox"/> I accept the <a href="#" required>Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <Link to={'/Login'}><a href="#" className="text-danger">Sign in</a></Link></div>
            </div>
            </section>
        </Fragment>
    )
}

export default SignUP;