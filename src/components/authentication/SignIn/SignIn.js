import React from 'react';
import { Button } from 'react-bootstrap';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="sinInComponent">
            <div className="signInContainer">
            <div className="SignIn">
            <div className="row signInRow" style={{height:'70vh'}}>
                    <div className="col-md-8 text-center inputFields" style={{padding:'20px'}}>
                        <h1>Welcome</h1>
                        <p>Log in to you account here.</p>
                        <div className="">
                        <input className="emailInp" type="email" name="email" placeholder="Enter your email address"/>
                        <br /><br />
                        <input className="passwordInp" type="password" name="password" placeholder="Enter your password"/>
                        <br /><br />
                        <Button className="py-2  px-5" variant="info">Log in</Button> 
                        </div>
                    </div>
                    <div className="col-md-4 signUpNow" style={{padding: '20px', backgroundColor:'cyan'}}>
                        <div><h6 >Don't have an account? </h6></div>
                        <div><p>Sign Up</p></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;