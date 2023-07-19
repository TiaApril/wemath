import React from 'react'
import {FaTwitter, FaFacebookSquare, FaLinkedinIn} from "react-icons/fa"




function LoginForm() {
  return (
    <>
    <div className='login-container'>
      <div className='justify-content-center' >
        
          <div className='mx-auto' style={{borderRadius: '2rem',maxHeight:'600px' ,maxWidth: '600px', backgroundColor: "#f8f8f8" }}>
            <h1 className='ms-5 pt-3 my-auto '>
              <span style={{fontWeight: 'bold'}}>Login</span>
            </h1>
          <div className='pt-3 pb-5 ps-5 pe-5'>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
              
              </div>
                  <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                  </p>
              </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <div className="align-items-center my-4">
              <h5 className="text-center fw-bold mx-3 mb-0 pb-2">OR</h5>
              <p class="text-center">Sign In with social media</p>
          </div>

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-primary" style={{backgroundColor: '#3b5998'}}>
            <FaFacebookSquare fab icon="facebook-f" className="mx-2"/>
              Continue with facebook
            </button>
          </div>

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-primary text-black" style={{backgroundColor: 'white'}}>
            <FaLinkedinIn fab icon="twitter" className="mx-2"/>
              Continue with LinkedIn
            </button>
          </div>

          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-primary" style={{backgroundColor: '#55acee'}}>
            <FaTwitter fab icon="twitter" className="mx-2"/>
              Continue with twitter
            </button>
          </div>

          </div>
          </div>

          
          
      </div>
    </div>
    </>
  )
}

export default LoginForm