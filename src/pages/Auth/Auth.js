import { useState } from "react";
import "./Auth.css"
import {  useNavigate } from "react-router-dom";
function Auth(){
    //userId,password,email,profilePic
    const [isLogin,setIsLogin]=useState(true);
    const navigate=useNavigate()
    const handleTabs=(e)=>{
        if(e.target.innerText=="Log In") setIsLogin(true);
        else if(e.target.innerText=="Sign Up") setIsLogin(false)
    }
    const HandleAuth=(e)=>{
        e.preventDefault();
        navigate("/chat")
    }
    return (
        <div className="auth-main-container">
        <div className="auth-container">
            <div className="format">
            <div className="auth-title">Kon-nect</div>
            <div className="auth-tabs">
                <div className={`auth-tab-div ${isLogin?"bg-info":""}`} onClick={handleTabs} >Log In</div>
                <div className={`auth-tab-div ${isLogin?"":"bg-info"}`} onClick={handleTabs}>Sign Up</div>
            </div>
            <div className="auth-form-container">
                <form className="auth-form">
                    <label>User Id:</label>
                    <input className="form-control shadow-none" type="text"></input>
                    {!isLogin && <><label>Email:</label>
                    <input className="form-control shadow-none" type="email"></input></>}
                    <label>Password:</label>
                    <input className="form-control shadow-none" type="password"></input>
                    {!isLogin && <><label>Profile Picture:</label>
                    <input className="form-control" type="file"></input></>}
                    <button className="form-control btn btn-primary" onClick={HandleAuth}>{isLogin?"Log In":"Sign Up"}</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Auth;