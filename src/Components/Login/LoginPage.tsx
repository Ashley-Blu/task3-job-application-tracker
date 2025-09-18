import React from 'react'; import './Login.css'; import image from "../../assets/signup.png"

export const LoginPage = () => {
  return (
    <>
        <div className="signin-wrapper">
                <div className="sign-side">
                    <h1>Login</h1>
                    <p>Welcome back...</p>
        
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" placeholder="Enter your username here..."/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Enter your password here..."/>
                    </form>
                    <button>Login</button>
                </div>
                <div className="image-side">
                  <img src={image} alt="" className="image" />
                </div>
              </div>
    </>
  )
}

