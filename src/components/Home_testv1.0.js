import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Home.css';
import TableData from './TableData_test';
function Home() {

  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
  });
  
  const [questions, setQuestions] = useState([
    // {
    //   question: "",
    //   answer: "",
    //   difficultyLevel: "",
    // },
  ]);

  const [singleQuestion, setsingleQuestion] = useState({
    question: "",
    answer: "",
    difficultyLevel: "",
  });

  
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
  // console.log('primaryData',primaryInfo);

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

    setsingleQuestion({
      question: "",
      answer: "",
      difficultyLevel: "",
    })
  };
  console.log(questions);


  return (
    <div>
       <Form onSubmit={handleSubmit}>
      <Container >
        <Row>
          <Col md={12}>
            <div id="header">Upload Your Questions</div>
          </Col>
        </Row>
        <Row className="g-3" /* id="tab-spc" */ >
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Candidate Name">
              <Form.Control type="Condidate Name" placeholder="name@example.com" 
              name="candidateName"
              onChange={(e) => {
                updatePrimaryData(e);
              }}
              value={primaryInfo.candidateName}/>
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
                <option>Select.....</option>
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
               name="technology"
               onChange={(e) => {
                 updatePrimaryData(e);
               }}
               value={primaryInfo.technology}>
                <option>Select.....</option>
                <option value="reactjs">ReactJS</option>
                <option value="vuejs">Vue JS</option>
                <option value="angular">Angular</option>
                <option value="java">Java</option>
                <option value="mongodb">Mongodb</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        {/* display question data */}
        <TableData questions={questions}  getDeleteDataIndex={getDeleteDataIndex}/>

        <Row className="g-3">
          <Col md={9}>
            <FloatingLabel controlId="floatingInputGrid" label="Question">
              <Form.Control type="Question" placeholder="name@example.com" 
               name="question"
               onChange={(event) => {
                 updateQuestionData(event);
               }}
               value={singleQuestion.question}/>
            </FloatingLabel>
          </Col>

          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Defficulty Level">
              <Form.Select aria-label="Floating label select example" 
              name="difficultyLevel"
              onChange={(event) => {
                updateQuestionData(event);}}
              value={singleQuestion.difficultyLevel}>
                <option>Select.....</option>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col lg={9}>
            <FloatingLabel controlId="floatingTextarea" label="Answer">
              <Form.Control as="textarea" placeholder="name@example.com"
                style={{ height: '100px' }}
                name="answer"
                onChange={(event) => {
                  updateQuestionData(event);
                }}
                value={singleQuestion.answer} />
            </FloatingLabel>
          </Col>

          <Col md={3} className="addButton" >
            <Button 
             onClick={() => {
              updateToQuestionData();
            }} className="btnbtn float-end" style={{ color: 'white', backgroundColor:"#FAA81D", border:"none" }}><i class="fal fa-plus-circle"></i>&nbsp;Add New</Button>
          </Col>
        </Row>
        
        <Row className="g-3">
        <Col md={12} className="submitButton" >
        <Button className="sub float-end " style={{ color: 'white', backgroundColor:"#FAA81D", border:"none" }}>
          Submit</Button>
          </Col>
          </Row>



        {/* <Row className="g-3">
          <Col md={9}>
            <FloatingLabel controlId="floatingInputGrid" label="Question">
              <Form.Control type="Question" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Defficulty Level">
              <Form.Select aria-label="Floating label select example">
                <option>Select.....</option>
                <option value="easy">Easy</option>
                <option value="itermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col lg={9}>
            <FloatingLabel controlId="floatingTextarea" label="Answer">
              <Form.Control as="textarea" placeholder="name@example.com"
                style={{ height: '100px' }} />
            </FloatingLabel>
          </Col>
          <Col md={3} className="addButton" >
            <Button className="btnbtn" style={{ color: 'white', backgroundColor:"#FAA81D", border:"none" }}><i class="fal fa-plus-circle"></i>&nbsp;Add New</Button>
          </Col>
        </Row> */}


        {/* <div className="card" >
          <Row className="g-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingInputGrid" label="Question">
              <Form.Control type="Question" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingInputGrid" label="Defficulty Level">
              <Form.Select aria-label="Floating label select example">
                <option>Select.....</option>
                <option value="easy">Easy</option>
                <option value="itermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col lg={9}>
            <FloatingLabel controlId="floatingTextarea" label="Answer">
              <Form.Control as="textarea" placeholder="name@example.com"
                style={{ height: '100px' }} />
            </FloatingLabel>
          </Col>
          </Row>
          </div> */}
      </Container>
      </Form>
    </div>

  )
}

export default Home
