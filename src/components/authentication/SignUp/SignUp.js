import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SignUp.css';
import useAuth from './../../../hook/useAuth';

const SignUp = () => {


    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        
        e.preventDefault();
    }

    return (
        <div className="container ">
            <h1>Sign Up </h1>

            <div className=" row">
                <div className="col-md-8">
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Already Have An Account</h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;