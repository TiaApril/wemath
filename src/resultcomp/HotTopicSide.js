import React from 'react'
import Man1 from "../images/Man1.svg";
import Man2 from "../images/Man2.svg";
import Woman1 from "../images/Woman1.svg";


function HotTopicSide() {
  return (
    <div>
        {/* hot topic */}
        <div class="p-2 flex-shrink-1 bd-highlight right-sidebar " >
                  <div className="text-center mt-5">
                    <h4>Hot Topics</h4>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md'>
                          <div className='result-topics-container'>
                              <div className='user-profile'>
                                <img src={Man1}></img>
                                <div>
                                  <p>John</p>
                                  <span>January 26th, 2022</span>
                                </div>
                              </div>
                              <p className='post-text'>what is the result for 4 X 6 = </p>
                              <div className='post-row'>
                              </div>
                          </div>
                        </div>
                        <div className='col-md'>
                          <div className='result-topics-container'>
                            <div className='user-profile'>
                              <img src={Man2}></img>
                              <div>
                                <p>John</p>
                                <span>January 26th, 2022</span>
                              </div>
                            </div>
                            <p className='post-text'>what is the result for 4 X 6 = </p>
                            <div className='post-row'>
                            </div>
                          </div>
                        </div>
                        <div className='col-md'>
                          <div className='result-topics-container'>
                            <div className='user-profile'>
                              <img src={Man2}></img>
                              <div>
                                <p>John</p>
                                <span>January 26th, 2022</span>
                              </div>
                            </div>
                            <p className='post-text'>what is the result for 4 X 6 = </p>
                            <div className='post-row'>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default HotTopicSide