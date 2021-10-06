import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Container,
  FloatingLabel,
  Button,
  Form,
  Row,
} from "react-bootstrap";
import TableData from "./TableData_test";
// import Button from '@restart/ui/esm/Button';

function Home() {
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
  const getDeleteDataIndex = (index) => {
    const newquestionsData = [...questions];
    newquestionsData.splice(index, 1);
    setQuestions(newquestionsData);
  };

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
  console.log('primaryData',primaryInfo);

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
  console.log(questions);

  return (
    <div>
       <Form onSubmit={handleSubmit}>
      <h2>Upload Your Questions</h2>
      <Container>
        <Row className="g-2">
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Candidate Name">
              <Form.Control
                type="Condidate Name"
                placeholder="name@example.com"
                name="candidateName"
                onChange={(e) => {
                  updatePrimaryData(e);
                }}
                value={primaryInfo.candidateName}

              />
            </FloatingLabel>
          </Col>

          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Department">
              <Form.Select aria-label="Floating label select example" 
               name="department"
               onChange={(e) => {
                 updatePrimaryData(e);
               }}
               value={primaryInfo.department}>
                <option></option>
                <option value="hr">HR</option>
                <option value="it">IT</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Client Name">
              <Form.Control type="Client Name" placeholder="name@example.com"
              name="clientName"
              onChange={(e) => {
                updatePrimaryData(e);
              }}
              value={primaryInfo.clientName} />
            </FloatingLabel>
          </Col>

          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Technology">
              <Form.Select aria-label="Floating label select example"
               placeholder="Enter email"
               name="technology"
               onChange={(e) => {
                 updatePrimaryData(e);
               }}
               value={primaryInfo.technology}>
                <option></option>
                <option value="reactjs">ReactJS</option>
                <option value="vuejs">Vue JS</option>
                <option value="angular">Angular</option>
                <option value="java">Java</option>
                <option value="mongodb">Mongodb</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row className="g-3">

          <Col md={8}>
            <FloatingLabel controlId="floatingInputGrid" label="Question">
              <Form.Control type="Question" placeholder="name@example.com" 
              name="question"
              onChange={(event) => {
                updateQuestionData(event);
              }}
              value={singleQuestion.question}/>
            </FloatingLabel>
          </Col>

          <Col md={2}>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Defficulty Level"
            >
              <Form.Select aria-label="Floating label select example"
              name="difficultyLevel"
              onChange={(event) => {
                updateQuestionData(event);
              }}
              value={singleQuestion.difficultyLevel} >
                <option></option>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row className="g-4">

          <Col lg={10}>
            <FloatingLabel controlId="floatingTextarea" label="Answer">
              <Form.Control
                as="textarea"
                placeholder="name@example.com"
                style={{ height: "100px" }}
                name="answer"
                onChange={(event) => {
                  updateQuestionData(event);
                }}
                value={singleQuestion.answer}/>
            </FloatingLabel>
          </Col>
          <Col md={2} className="m-4 mb-5 p-3">
            <Button variant="warning"  
             type="submit"
             onClick={() => {
               updateToQuestionData();
             }}>Add</Button>
          </Col>
        </Row>
      </Container>
      </Form>
      <TableData questions={questions}  getDeleteDataIndex={getDeleteDataIndex}/>
    </div>
  );
}

export default Home;
