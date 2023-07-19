import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaThumbsUp, FaCommentAlt, FaThumbsDown, FaShareAlt, FaPlus} from "react-icons/fa"
import { Pagination as Page, Navigation } from "swiper";
import Man1 from "../images/Man1.svg";
import Man2 from "../images/Man2.svg";
import Woman1 from "../images/Woman1.svg";

function RelatedTopics() {
  return (
    <div>
        {/* related topic swipe */}
        <h1>Related Topic</h1>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Page, Navigation]}
                  className="mySwiper"
                >
                  <div>
                    
                  </div>
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Woman1}></img>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 4</p>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 5</p>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 6</p>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 7</p>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 8</p>
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
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='col-md'>
                        <div className='post-container'>
                          <div className='user-profile'>
                            <img src={Man2}></img>
                            <div>
                              <p>Slide 9</p>
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
                  </SwiperSlide>
                </Swiper>
    </div>
  )
}

export default RelatedTopics