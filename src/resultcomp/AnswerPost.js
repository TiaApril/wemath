import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { Pagination as Page, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Man1 from "../images/Man1.svg";
import Man2 from "../images/Man2.svg";
import Woman1 from "../images/Woman1.svg";
import Card from 'react-bootstrap/Card';
import {FaThumbsUp, FaCommentAlt, FaThumbsDown, FaShareAlt, FaPlus} from "react-icons/fa"



function AnswerPost() {
  return (
    <div>
        {/* Answer Post */}
        <div className="card mb-5" >
                    <div className="card-body text-center">
                      <div className='row'>
                        <div className='col-md '>
                          <div className='result-container'>
                            <div className='user-profile '>
                              <img src={Man1}></img>
                              <div>
                                <p>John</p>
                                <span>January 26th, 2022</span>
                              </div>
                            </div>
                            <p className='post-text border rounded border-1 border-white mt-5'>
                              <h3 className="align-self-start">
                                <p>20.000cm-3.000 mm+200 dm</p>
                                  <p>=200 m-3 m+20 m </p>
                                  <p>=217 m</p>
                                <span>=37m</span> 
                              </h3>
                            </p>
                            <Card.Footer>
                            <small className="text-muted">
                            <div className='search-result-icons align-left'>
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
                            </small>
                            </Card.Footer>
                            {/* comment */}
                        
                              <div class="card">
                                <div class=" card d-flex justify-content-center align-items-center">
                                <div class="col-md">
                                    <div class="card">
                                      <div class="p-3">
                                          <h6>Comments</h6>
                                      </div>
                                      <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle mr-2"/>
                                          <input type="text" class="form-control" placeholder="Enter your comment..."/>
                                      </div>
                                    {/* scroll comment */}
                                      <Element className="element" id="scroll-container" style={{
                                          position: 'relative',
                                          height: '200px',
                                          overflow: 'scroll',
                                        }}>
                                      <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                          </div>
                                      </Element>

                                        <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                      </div>
                                      </Element>
                                      <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                      </div>
                                      </Element>                                    
                                      </Element>

                                    {/* end */}
                                </div>
                                </div>
                                </div>
                              </div>
                            {/* end comment */}
                            
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-5" >
                    <div className="card-body text-center">
                      <div className='row'>
                        <div className='col'>
                          <div className='result-container'>
                            <div className='user-profile'>
                              <img src={Woman1}></img>
                              <div>
                                <p>Marie</p>
                                <span>January 26th, 2022</span>
                              </div>
                            </div>
                            <p className='post-text border rounded border-1 border-white mt-5'>
                              <h3 className="mb-4 mt-4">
                                <span>(2000/100)-(3.000/1.000)+(200/10)=37m</span> 
                              </h3>
                            </p>
                            <Card.Footer>
                            <small className="text-muted">
                            <div className='search-result-icons align-left'>
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
                            </small>
                            </Card.Footer>
                            {/* comment */}
                        
                              <div class="card">
                                <div class=" card d-flex justify-content-center align-items-center">
                                <div class="col-md">
                                    <div class="card">
                                      <div class="p-3">
                                          <h6>Comments</h6>
                                      </div>
                                      <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle mr-2"/>
                                          <input type="text" class="form-control" placeholder="Enter your comment..."/>
                                      </div>
                                    {/* scroll comment */}
                                      <Element className="element" id="scroll-container" style={{
                                          position: 'relative',
                                          height: '200px',
                                          overflow: 'scroll',
                                        }}>
                                      <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                          </div>
                                      </Element>

                                        <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                      </div>
                                      </Element>
                                      <Element>
                                          <div class="d-flex flex-row p-3">
                                          <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                                          <div class="w-100">
                                              <div class="d-flex justify-content-between align-items-center">
                                                  <div class="d-flex flex-row align-items-center">
                                                  <span class="mr-2">Brian selter</span>
                                                  <small class="c-badge">Top Comment</small>
                                                  </div>
                                                  <small>12h ago</small>
                                          </div>
                                          <p class="text-start comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                          <div class="d-flex user-feed">
                                              <span class="wish"><FaThumbsUp/>24</span>
                                              <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>
                                          </div>
                                          </div>
                                      </div>
                                      </Element>                                    
                                      </Element>

                                    {/* end */}
                                </div>
                                </div>
                                </div>
                              </div>
                            {/* end comment */}
                            
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                {/* pagination */}
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>

                    <Pagination.Ellipsis />

                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                {/* end */}
    </div>
  )
}

export default AnswerPost