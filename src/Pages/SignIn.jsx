import React from "react";
import '../Pages/CSS/SignIn.css';
export default function SignIn(){
    return(
        <div className="login">
            <div className="signin-container">
                <h1>Sign up</h1>
                <div className="sign-in-inputs">
                    <input type="text" placeholder="enter your name" />
                    <input type="email" placeholder="Email addresss" />
                    <input type="password" placeholder="enter password" />
                </div>
                <button>Continue</button>
                <div className="login-container">
                    <p className="old-account">Already have an account?<span>Login here</span></p>
                    <div className="Agree-container">
                        <input type="checkbox"  />
                        <p>By continuing,I agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}