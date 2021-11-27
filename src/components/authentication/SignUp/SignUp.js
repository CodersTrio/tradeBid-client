import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './SignUp.css';
import useAuth from './../../../hook/useAuth';
import { Alert, Button } from 'react-bootstrap';

const SignUp = () => {


    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {  registerUser, user } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // if (loginData.password !== loginData.password2) {
        //     alert('Your password did not match');
        //     return;
        // }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    return (
        <div className="sinUpComponent">
            <div className="SignUp">
                <div className="row ">
                    <div className="col-md-8 text-center signUpContainer">
                        <h1>Welcome</h1>
                        <p>Log in to you account here.</p>
                        <form onSubmit={handleLoginSubmit}>
                            <div class="row my-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" name="name" onBlur={handleOnBlur}/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"   onBlur="handleOnBlur"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                               
                               <div class="col-12">
                                   <input type="text" class="form-control" id="phone" placeholder='Phone' name="phone" onBlur="handleOnBlur" />
                               </div>
                           </div>
                            <div class="row mb-3">
                               
                                <div class="col-12">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder='Email' name="email" onBlur={handleOnBlur}/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                
                                <div class="col-12">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder='Password' name="password" onBlur={handleOnBlur}/>
                                </div>
                            </div>

                            <Button className="py-2 px-5" variant="info" type="submit">Register</Button>
                            {/* {user?.email && <Alert severity="success">User Created successfully!</Alert>} */}
                            

                        </form>
                        
                    </div>
                    <div className="col-md-4 signUpNow mt-3">
                        <div><h6 >Don't have an account? </h6></div>
                        <div><p><Link to="/signIn">Sign In</Link></p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;