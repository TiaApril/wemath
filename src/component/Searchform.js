import React from 'react'
import {BsSearch} from "react-icons/bs"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"

function Searchform() {
  return (
    <>
    <section className='bg-dark text-light p-5'>
      <div className='container'>
        <div className='justify-content-between align-items-center'>
          <h3 className="text-center">Ask Your Question Here</h3>
          <div className="input-group mb-3">
            <input type="text" className='form-control' placeholder="What is your question?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <Link className="btn btn-light btn-outline-secondary"  type="button" id="button-addon2" to="/result">
              <BsSearch className="me-2"/>search</Link>
          </div>
        </div>
       </div>
    </section>
    
    
  </>
  )
}

export default Searchform