import React, { useState } from "react";
import '../Pages/CSS/SignIn.css';
export default function SignIn(){
    const [action,setAction] = useState("Sign Up");
    const [userdetail,setUserdetail] = useState(
    {
        username:"",
        useremail:"",
        password:null,
    })
  
    let getInputChange=(event)=>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setUserdetail((currData)=>{
            currData[fieldName] = fieldValue;
            return {...currData,[fieldName]:fieldValue};
        })
    }
    let onSubmitData=()=>{
        console.log(userdetail);
        setAction("Profile")
       
    }

    return(
        <div className="login">
            <div className="signin-container">
                <h1>{action}</h1>
                {action==="Profile"?
                <>
                <hr />
                <div className="user-details"><h4><i class="fa-solid fa-user"></i> Name:</h4><p>{userdetail.username}</p></div>
                <div className="user-details"><h4><i class="fa-solid fa-envelope"></i> Email-ID:</h4><p>{userdetail.useremail}</p></div>
                <div className="user-details"><h4><i class="fa-solid fa-lock"></i> Password:</h4><p>{userdetail.password}</p></div>
                <button>My Orders <i className="fa-solid fa-chevron-right"></i> </button>
                <button>Wishlists <i className="fa-solid fa-chevron-right"></i> </button>
                <h4 className="user-details">Log Out</h4>
                </>: <><div className="sign-in-inputs">
                    <input type="text"  placeholder="enter your name" value={userdetail.username} onChange={getInputChange} name="username" id="username"/>
                    <input type="email" placeholder="email addresss" value={userdetail.useremail} onChange={getInputChange} name="useremail" id="useremail"/>
                    <input type="password" placeholder="enter password" value={userdetail.password} onChange={getInputChange} name="password" id="password"/>
                </div>
                <button onClick={onSubmitData}>Continue</button>
                <div className="login-container">
                    {action==="Sign Up"?<p className="old-account">Already have an account?<span onClick={()=>{setAction("Log In")}}>Login here</span></p>:<p className="old-account">Don't have an account?<span onClick={()=>{setAction("Sign Up")}}>Sign In</span></p>}
                    <div className="Agree-container">
                        <input type="checkbox" />
                        <p>By continuing,I agree to the terms of use & privacy policy</p>
                    </div>
                </div></>}
               
            </div>
        </div>
    )
}