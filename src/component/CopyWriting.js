import React from 'react'
import Showcase2 from "../images/Showcase2.png";
import { Link } from 'react-router-dom';




function CopyWriting() {
  return (
    <>
    {/* showcase */}
    <section className='bg-dark text-light text-center'>
        <div className='container'>
            <div className='d-sm-flex align-items-center justify-content-between'>
                <div className='text-center'>
                    <h1 className='text-black'>WeMath</h1>
                    <p className='lead text-black fw-normal'>social learning platform where students and educators solve their Math problems together</p>
                    <div className='container'>
            
                            <button className='btn btn-primary btn-lg margin-left me-3 '>
                              <Link to="/signinform" className="nav-link active">Sign In</Link>
                            </button>
                            <button className='btn btn-primary btn-lg margin-right'>
                              <Link to="/loginform" className="nav-link active">Log In</Link>

                            </button>
                    </div>
                </div>
                <img className='img-fluid w-50 d-none d-sm-block' src={Showcase2} alt="showcase"></img>
            </div>
        </div>
    </section>
    </>
  )
}

export default CopyWriting