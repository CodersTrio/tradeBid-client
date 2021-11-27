import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import './SignIn.css';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const SignIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="sinInComponent">
            <div className="signInContainer">
            <div className="SignIn">
            <div className="row signInRow" style={{height:'70vh'}}>
                    <div className="col-md-8 text-center inputFields" style={{padding:'20px'}}>
                        <h1>Welcome</h1>
                        <p>Log in to you account here.</p>
                        <form onSubmit={handleLoginSubmit}>
                        <input className="emailInp" type="email" name="email" placeholder="Enter your email address" onChange={handleOnChange}/>
                        <br /><br />
                        <input className="passwordInp" type="password" name="password" placeholder="Enter your password" onChange={handleOnChange}/>
                        <br /><br />
                        <Button className="py-2  px-5" variant="info" type="submit">Log in</Button> 
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        </form>
                    </div>
                    <div className="col-md-4 signUpNow" style={{padding: '20px', backgroundColor:'cyan'}}>
                        <div><h6 >Don't have an account? </h6></div>
                        <div><p> <Link to='/signUp'> Sign Up </Link></p></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;