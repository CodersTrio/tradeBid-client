import React from 'react';
import { Button } from 'react-bootstrap';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="sinInComponent">
            <div className="SignIn">
                <div className="row ">
                    <div className="col-md-8 text-center signInContainer" style={{border: '2px solid red'}}>
                        <h1>Welcome</h1>
                        <p>Log in to you account here.</p>
                        <div className="inputFields">
                        <input className="emailInp" type="email" name="email" placeholder="Enter you email address"/>
                        <br /><br />
                        <input className="passwordInp" type="password" name="password" placeholder="Enter your password"/>
                        <br /><br />
                        <Button className="py-2  px-5" variant="info">Log in</Button> 
                        </div>
                    </div>
                    <div className="col-md-4 signUpNow" style={{border: '2px solid blue'}}>
                        <div><h6 >Don't have an account? </h6></div>
                        <div><p>Sign Up</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;