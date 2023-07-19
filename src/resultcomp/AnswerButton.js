import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';


function AnswerButton() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <div className='d-grid gap-2'>
                  <Button
                    size='lg'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Add Answer
                  </Button>
        </div>
            <Collapse className='card' in={open}>
                    <Card.Body id="example-collapse-text">
                    <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Give your answer here"
                      
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                    <Button variant="outline-secondary" id="button-addon2">
                      Submit
                    </Button>
                    </InputGroup.Text>
                    </InputGroup>
                    </Card.Body>
                  </Collapse>
    </div>
  )
}

export default AnswerButton