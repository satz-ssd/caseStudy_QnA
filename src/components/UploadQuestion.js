import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";



function UploadQuestion() {


  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // update data
  const updateInputData = (e) => {
    
    // console.log(showInputData);
  };

  return (
    <div>

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Candidate Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="candidateName"
            onChange={(e) => {
              updateInputData(e);
            }}
            value=''
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Department </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="department"
            onChange={(e) => {
              updateInputData(e);
            }}
            value=''
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Client Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="clientName"
            onChange={(e) => {
              updateInputData(e);
            }}
            value=''
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Technology </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="technology"
            onChange={(e) => {
              updateInputData(e);
            }}
            value=''
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="question"
            onChange={(e) => {
              updateInputData(e);
            }}
            value=''
          />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Difficulty Level</Form.Label>
          <Form.Control type="text" placeholder="Enter email"  
          name="difficultyLevel" onChange={(e)=>{updateInputData(e)}} 
          value=''/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Answer</Form.Label>
          <Form.Control type="text" placeholder="Enter email" 
         name="answer"  onChange={(e)=>{updateInputData(e)}} 
         value='' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add new
        </Button>
      </Form> 
    </div>
  );
}

export default UploadQuestion;