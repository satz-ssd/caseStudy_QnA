import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TableData from "./TableData_test";

function UploadQuestion() {
  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
  });

  const [singleQuestion, setsingleQuestion] = useState({
    question: "",
    answer: "",
    difficultyLevel: "",
  });

  const [questions, setQuestions] = useState([
    // {
    //   question: "",
    //   answer: "",
    //   difficultyLevel: "",
    // },
  ]);

  //delete question
  const getDeleteDataIndex=(index)=>{
    const newquestionsData = [...questions];
    newquestionsData.splice(index, 1);
    setQuestions(newquestionsData);
}

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // update primary data
  const updatePrimaryData = (event) => {
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value,
    });
  };

  // update single questionData\
  const updateQuestionData = (event) => {
    setsingleQuestion({
      ...singleQuestion,
      [event.target.name]: event.target.value,
    });
  };

  // update SinglequestionData to Questions array
  
  const updateToQuestionData = () => {
    // let singleQuestionCopy={...singleQuestion}
    let questionsCopy = [...questions];
    questionsCopy.push(singleQuestion);
    setQuestions([...questionsCopy]);
  };
  // console.log(questions);

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
              updatePrimaryData(e);
            }}
            value={primaryInfo.candidateName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Department </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="department"
            onChange={(e) => {
              updatePrimaryData(e);
            }}
            value={primaryInfo.department}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Client Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="clientName"
            onChange={(e) => {
              updatePrimaryData(e);
            }}
            value={primaryInfo.clientName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Technology </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="technology"
            onChange={(e) => {
              updatePrimaryData(e);
            }}
            value={primaryInfo.technology}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="question"
            onChange={(event) => {
              updateQuestionData(event);
            }}
            value={singleQuestion.question}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Difficulty Level</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="difficultyLevel"
            onChange={(event) => {
              updateQuestionData(event);
            }}
            value={singleQuestion.difficultyLevel}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="answer"
            onChange={(event) => {
              updateQuestionData(event);
            }}
            value={singleQuestion.answer}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="mr-2 ml-2"
          type="submit"
          onClick={() => {
            updateToQuestionData();
          }}
        >
          Add new
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* table to display  */}
      <TableData questions={questions}  getDeleteDataIndex={getDeleteDataIndex}/>
    </div>
  );
}

export default UploadQuestion;
