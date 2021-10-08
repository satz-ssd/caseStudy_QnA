import React from 'react'
// import { Table,, } from 'react-bootstrap';
import { Button, Col, Container, FloatingLabel, Form, Row,Table,Card } from 'react-bootstrap';
function TableData(props) {

    //delete data index 
    const deleteFormData = (index) => {
        props.getDeleteDataIndex(index) 
        };
    return (

        <div>

        {
              props.questions.map((data,index)=>{
               return   <Row key={index} className="g-3">
               <Col md={9}>
                 <FloatingLabel controlId="floatingInputGrid" label="Question">
                   <Form.Control type="Question" value={data.question} placeholder="name@example.com" />
                 </FloatingLabel>
               </Col>
               <Col md={3}>
               <FloatingLabel controlId="floatingInputGrid" label="Difficulty">
                   <Form.Control type="Question" value={data.difficultyLevel} placeholder="name@example.com" />
                 </FloatingLabel>
                 
               </Col>
               <Col lg={9}>
                 <FloatingLabel controlId="floatingTextarea" label="Answer">
                   <Form.Control  value={data.answer} as="textarea" placeholder="name@example.com"
                     style={{ height: '100px' }} />
                 </FloatingLabel>
               </Col>
               <Col md={3} className="addButton" >
                 <Button  onClick={()=>{deleteFormData(index)}} className="btnbtn" style={{ color: 'white', backgroundColor:"#FAA81D", border:"none" }}><i class="fas fa-trash"></i>&nbsp;Delete</Button>
               </Col>
             </Row> 
                 })
        }
            
{/* 
        {
              props.questions.map((data,index)=>{
               return   <Card key={index}> 
                <Card.Body>{index + 1}</Card.Body>
               <Card.Body>{data.question}</Card.Body>
               <Card.Body>{data.difficultyLevel}</Card.Body>
               <Card.Body>{data.answer}</Card.Body>
               <Button variant="warning" onClick={()=>{deleteFormData(index)}}>Delete <i className="fas fa-trash-alt"></i></Button>
                </Card>
                 })
        } */}
            

        </div>
    )
}

export default TableData
