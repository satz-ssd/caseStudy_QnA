import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
import './navbar.css'
// import moduleName from 'module'
// import {useForm} from 'react-hook-form'

function Navbar_test() {

    // const {register, handleSubmit} = useForm();


    // const [ sendData, register, errors ] = useForm({ mode: "onBlur" });
    // const [technology, settechnology] = useState("")
    // const [technologyError, settechnologyError] = useState('')

    // const [searchData, setsearchData] = useState({
    //     technology: "",
    //     level: "",
    //     fromDate: "",
    //     toDate: ""
    // });


    // const sendData = (event) => {
    //     if(technology === 0){
    //         settechnologyError("choose one")
    //     }
    // }
    

    // const [levelError, setlevelError] = useState('')
    // const [fromDateError, setfromDateError] = useState('')
    // const [toDateError, settoDateError] = useState('')
    // const [searchError, setsearchError] = useState('')

    // let validateTechnology = () => {
    //     if (technology === 0) {
    //         settechnologyError('*Choose the technology')
    //     }
    // }

    // const sendData = (event) => {
    //     validateTechnology();
    //     if (validateTechnology()) {
    //         setsearchData({
    //             technology: "",
    //             level: "",
    //             fromDate: "",
    //             toDate: ""
    //         })
    //     }
    // }



    return (
        <>
            <Navbar className="navbar__main" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand className="logo" ><Link to="/">

                        <img src="assets/logo2.png" alt="" className="image" height='48px' width='200px' /></Link></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="">

                            <Nav className="me-auto">

                                <div className='tech'  >
                                    <Form.Select aria-label="Default select example"
                                        variant="" id="dropdown-basic" className="technol" /* ref={register} */>
                                        
                                        <option value="0">Technology</option>
                                        <option value="1">JAVA</option>
                                        <option value="2">PYTHON</option>
                                        <option value="3">ANGULAR JS</option>
                                        <option value="4">JAVASCRIPT</option>
                                    </Form.Select>

                                    {/* {technologyError && <div className="errormsg">{technologyError}</div>} */}

                                    {/* {technology === 0 ? "please choose" : null} */}
                                    {/* {errors.func && <p style={{ color: 'red' }}> {errors.func.message}</p>} */}


                                    {/* <label htmlFor="func" className="form_label">
                                        Select function
                                    </label>
                                    <select name="func"
                                        ref={register({
                                            required: "select one option"
                                        })}>
                                        <option value=""></option>
                                        <option value="5">Function 2</option>
                                        <option value="6">Function 3</option>
                                    </select>
                                    {errors.func && <p style={{ color: 'red' }}> {errors.func.message}</p>} */}
                                </div>

                                <div className='Linktech'>
                                    <Form.Select aria-label="Default select example"
                                        variant="" id="dropdown-basic"
                                        className="linksize" >
                                        <option>LEVEL</option>
                                        <option value="JAVA">EASY</option>
                                        <option value="INTERMEDIATE">INTERMEDIATE</option>
                                        <option value="HARD">HARD</option>
                                    </Form.Select>
                                </div>


                                <div className="formdate">
                                    <Form.Control type="text" name='date-of-birth' placeholder="From Date"
                                        onFocus={(e) => e.target.type = "date"} onBlur={(e)=>e.target.type="text"}
                                    />

                                </div>

                                <div className="todate">
                                    <Form.Control type="text" name='date-of-birth' placeholder="To Date"
                                        onFocus={(e) => e.target.type = "date"}
                                    />

                                </div>

                                <input type='search' placeholder="search" title='todate' aria-label='Search'
                                    className='search ' />


                                <Button variant=""  className="searchbutton"><Link  className="searchbuttonText"  to="/search">Search</Link></Button>

                            </Nav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}


export default Navbar_test






// import React from 'react'
// import { Navbar, Container } from 'react-bootstrap'
// import {Link} from "react-router-dom";

// function Navbar_test() {
//     return (
//         <div>
//         <Navbar expand="lg" variant="light" bg="light">
//             <Container>
//             <Navbar.Brand ><Link to="/"><img src="assets/logo2.png" /></Link></Navbar.Brand>
//             </Container>

//             <Link to="/search">Search</Link>
//         </Navbar>
//         {/* </Container> */}
//         </div>
//     )
// }

// export default Navbar_test
