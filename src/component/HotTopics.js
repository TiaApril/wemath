import React from 'react'
import {FaThumbsUp, FaCommentAlt, FaThumbsDown, FaShareAlt} from "react-icons/fa"
import Man1 from "../images/Man1.svg";
import Man2 from "../images/Man2.svg";



function HotTopics() {
  return (
    <>
    <section className='p-5'>
      <div className='container'>
          <div className='row'>
            <div className='col-md'>
            <div className='post-container'>
                <div className='user-profile'>
                  <img src={Man1}></img>
                  <div>
                    <p>John</p>
                    <span>January 26th, 2022</span>
                  </div>
                </div>
                <p className='post-text'>what is the result for 4 X 6 = </p>
                <div className='post-row'>
                  <div className='activity-icons'>
                    <div>
                        <FaThumbsUp className='img'/> 100
                    </div>
                    <div>
                      <FaThumbsDown className='img'/> 120
                    </div>
                    <div>
                      <FaShareAlt className='img'/> 30
                    </div>
                    <div>
                      <FaCommentAlt className='img'/> 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='post-container'>
                <div className='user-profile'>
                  <img src={Man2}></img>
                  <div>
                    <p>John</p>
                    <span>January 26th, 2022</span>
                  </div>
                </div>
                <p className='post-text'>what is the result for 4 X 6 = </p>
                <div className='post-row'>
                  <div className='activity-icons'>
                    <div>
                        <FaThumbsUp className='img'/> 100
                    </div>
                    <div>
                      <FaThumbsDown className='img'/> 120
                    </div>
                    <div>
                      <FaShareAlt className='img'/> 30
                    </div>
                    <div>
                      <FaCommentAlt className='img'/> 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='post-container'>
                <div className='user-profile'>
                  <img src={Man2}></img>
                  <div>
                    <p>John</p>
                    <span>January 26th, 2022</span>
                  </div>
                </div>
                <p className='post-text'>what is the result for 4 X 6 = </p>
                <div className='post-row'>
                  <div className='activity-icons'>
                    <div>
                        <FaThumbsUp className='img'/> 100
                    </div>
                    <div>
                      <FaThumbsDown className='img'/> 120
                    </div>
                    <div>
                      <FaShareAlt className='img'/> 30
                    </div>
                    <div>
                      <FaCommentAlt className='img'/> 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* card slider */}

    </section>
    
    </>
  )
}

export default HotTopics