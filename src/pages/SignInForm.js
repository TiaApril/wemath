import React from 'react'
import {FaTwitter, FaFacebookSquare, FaLinkedinIn} from "react-icons/fa"




function SignInForm() {
  return (
    <>
    <div className='login-container'>
      <div className='justify-content-center' >
        <div className='mx-auto' style={{borderRadius: '2rem',maxHeight:'700px' ,maxWidth: '600px', backgroundColor: "#f8f8f8" }}>
            <h1 className='ms-5 pt-3 my-auto '>
              <span style={{fontWeight: 'bold'}}>Sign In</span>
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
            <label>Full Name</label>
            <input
              type="fullname"
              className="form-control"
              placeholder="Enter Full Name"
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
          
          <div className="d-grid mt-5">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
          <div className="align-items-center my-4">
              <h5 className="text-center fw-bold mx-3 mb-3">OR</h5>
              
          </div>

          <div className="d-grid mb-2">
            <p class="text-center" style={{fontWeight: 'bold'}}>Sign In with social media</p>
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

export default SignInForm