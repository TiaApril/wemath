import React from 'react'
import Card from 'react-bootstrap/Card';
import {FaThumbsUp, FaCommentAlt, FaThumbsDown, FaShareAlt, FaPlus} from "react-icons/fa"
import Man1 from "../images/Man1.svg"

function Question() {
  return (
    <>
    <div className="card mb-5" >
                    <div className="card-body text-center">
                      <div className='row'>
                        <div className='col'>
                          <div className='result-container'>
                            <div className='user-profile'>
                              <img src={Man1}></img>
                              <div>
                                <p>John</p>
                                <span>January 26th, 2022</span>
                              </div>
                            </div>
                            <p className='post-text border border-1 border-white mt-5'>
                              <h3 className="mb-4 mt-4">
                                <span style={{fontWeight: 'normal'}}>2000 cm - 3.000 mm +200 dm = ..... m</span> 
                              </h3>
                            </p>
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default Question