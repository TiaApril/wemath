import React from 'react'
import AnswerButton from '../resultcomp/AnswerButton'
import AnswerPost from '../resultcomp/AnswerPost'
import HotTopicSide from '../resultcomp/HotTopicSide'
import Order from '../resultcomp/Order'
import Question from '../resultcomp/Question'
import RelatedTopics from '../resultcomp/RelatedTopics'





function Result() {
  return (
    <div>
        <section className='p-5'>
            <div className='container'>
                <div className='row text-center g-4'>
                    <h1 className='border border-2 border-dark'>Search Result</h1>
                    <div className='col-md-auto'>
                        <div className="container d-flex bd-highlight">
                            <div className="container me-5 p-2 w-100 bd-highlight">
                               <Question/>
                               <AnswerButton/>
                               <Order/>
                               <AnswerPost/>
                               <RelatedTopics/>
                            </div>
                            <HotTopicSide/>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Result