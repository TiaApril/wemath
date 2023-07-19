import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function Order() {
  return (
    <>
    <div className='container-fluid d-sm-flex align-items-center justify-content-between p-3'>
                    <h5 className='text-start'>14 Results</h5>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Order by:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                  
                        <Dropdown.Item href="#/action-2" active>Newest</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Most Popular</Dropdown.Item>
                        <Dropdown.Divider />
                        
                        </Dropdown.Menu>
                    </Dropdown>
                   
                </div>

    </>
  )
}

export default Order