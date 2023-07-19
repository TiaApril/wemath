import React from 'react'
import {FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa"


function Footer() {
    return (
      <footer class="py-1 bg-dark">
        <div class="row p-2">
          <div class="col-2 offset-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
            </ul>
          </div>
  
          <div class="col-2 col-md-1 mb-3">
            <h5>Social Media</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <FaInstagram/> Instagram
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <FaFacebookSquare/> Facebook
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <FaLinkedinIn/> LinkedIn
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <FaTwitter/> Twitter
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  <FaYoutube/> Youtube
                </a>
              </li>
            </ul>
          </div>
  
          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                ></input>
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
  
        <div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-4 border-top">
          <p class="ms-5">&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex me-5">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <FaTwitter/>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <FaInstagram/>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <FaFacebookSquare/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
