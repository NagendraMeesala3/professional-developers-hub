import React, { Fragment, useState } from "react";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
let Login = ()=>{

    const [auth,setAuth] = useState(false)

    const [name,setName]=useState('');

    const [data,setData] = useState({
        Email:'',
        Password:''
    })

    const changeHandler = (e) =>{

        setData({...data,[e.target.name]:e.target.value})
    }

   

    const submitHandler = (e)=>{


        e.preventDefault();

        axios.post(`https://professional-developers-hub.herokuapp.com/login`,data).then((res)=>{

           localStorage.setItem('token',res.data.token) ;setAuth(true) 
           

        }).catch((err)=>{alert(err.message)})

        
        
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
              &nbsp; Professionals Developers Hub</a>
              <div className="collapse navbar-collapse">
                
              </div>
              <Link to={'/SignUp'}><button className="btn btn-outline-light"><i className="fa fa-sign-in pr-2" aria-hidden="true"></i>&nbsp; SignUp</button></Link>&nbsp;&nbsp;
              
            </div>
        </nav>
            <section className="signup">

            <div className="signup-form">
                <form onSubmit={submitHandler}>
                    <h2>LogIn</h2>
                    <p className="hint-text">LogIn your account. It's easy and only takes a minute.</p>
                    
                    <div className="form-group">
                        <input type="email" className="form-control" name="Email" placeholder="Email"  onChange={changeHandler} required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="Password" placeholder="Password" onChange={changeHandler} id="password" required/>
                       
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">LogIn Now</button>
                    </div>
                </form>
                <div className="text-center">You don't have account..? Create an account <Link to={'/SignUp'}><a href="#" className="text-danger">Sign up</a></Link></div>
            </div>
            </section>
        </Fragment>
    )
}

export default Login;