import React from 'react'
import { Table,Button,Card } from 'react-bootstrap';
function TableData(props) {

    //delete data index 
    const deleteFormData = (index) => {
        props.getDeleteDataIndex(index) 
        };
    return (
        <div>

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
                    }

             {/* <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>question</th>
                    <th>answer</th>
                    <th>difficultyLevel</th>
                    </tr>
                </thead> */}
                {/* <tbody>
                    {
                        props.questions.map((data,index)=>{
                            return  <tr key={index}>
                            <td >{index + 1}</td>
                            <td>{data.question}</td>
                            <td>{data.answer}</td>
                            <td>{data.difficultyLevel}</td>
                            <td><Button variant="danger" onClick={()=>{deleteFormData(index)}}><i className="fas fa-trash-alt"></i></Button></td>
                         </tr>
                        })
                    }
                </tbody>
                </Table> */}
            

        </div>
    )
}

export default TableData
