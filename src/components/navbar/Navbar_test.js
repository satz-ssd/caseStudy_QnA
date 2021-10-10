import React, { useState } from 'react'
import { Link, withRouter} from "react-router-dom";
import { Nav, Navbar, Container, Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import './navbar.css'

function Navbar_test(props) {
    const [searchError, setsearchError] = useState('')
    const [searchData, setsearchData] = useState({
        technology: "",
        level: "",
        fromDate: "",
        toDate: "",
        search: ""
    });

    const updateSearchData = (event) => {
        setsearchData({
            ...searchData,
            [event.target.name]: event.target.value,
        });
    };

    let validateSearch = () => {
        if (searchData.search) {
            let regex = /^[a-zA-Z]{2,30}$/;
            if (regex.test(searchData.search)) {
                setsearchError('')
                return true;
            } else {
                setsearchError("*Only characters allowed")
            }

        } else {
            setsearchError('*Enter some Questions to search')
        }
        return false;
    }

    const sendData = (event) => {
        validateSearch();
        if (validateSearch()) {
            console.log('searchData', searchData);
            setsearchError('')
            props.history.push('/search')
        }
    }
    

    return (
        <div className="navbar_main">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid>


                    <Navbar.Brand className="logo" >
                        <Link to="/">
                            <img src="assets/logo2.png" alt="" className="image" height='48px' width='200px' /></Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="" style={{}}>

                            <Nav className="me-auto">
                                <Row className='g-3'>


                                    <Col md={2}>
                                        <div className='tech'  >
                                            <Form.Select aria-label="Default select example"
                                                variant="" id="dropdown-basic" className="technol"
                                                name="technology"
                                                value={searchData.technology}
                                                onChange={updateSearchData}
                                            >
                                                <option>Technology</option>
                                                <option value="React Js">ReactJs</option>
                                                <option value="Vue Js">VueJs</option>
                                                <option value="Angular">Angular</option>
                                                <option value="Java">Java</option>
                                            </Form.Select>
                                        </div>
                                    </Col>


                                    <Col md={2}>
                                        <div className='Linktech'>
                                            <Form.Select aria-label="Default select example"
                                                variant="" id="dropdown-basic"
                                                className="linksize"
                                                name="level"
                                                value={searchData.level}
                                                onChange={updateSearchData}
                                            >
                                                <option>Level</option>
                                                <option value="Easy">Easy</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Expert">Expert</option>
                                            </Form.Select>
                                        </div>
                                    </Col>


                                    <Col md={2}>
                                        <div className="formdate">
                                            <Form.Control type="text" name='date-of-birth' placeholder="From Date" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}
                                            />

                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="todate">
                                            <Form.Control type="text" name='date-of-birth' placeholder="To Date" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}
                                            />

                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div>
                                            <InputGroup>
                                                <FormControl type="text" placeholder="Search Questions" aria-label='Search' className='search '
                                                    name="search"
                                                    value={searchData.search}
                                                    onChange={updateSearchData} />
                                            </InputGroup>
                                            {searchError && <div className="errormsg">{searchError}</div>}

                                        </div>
                                    </Col>

                                    <Col md={1}>
                                        <div>
                                            <Button style={{ width: "100%" }} className="searchbutton"
                                                onClick={sendData}
                                            >Search
                                                {/* <Link to="/search" id="searchid">Search</Link></Button> */}
                                                </Button>
                                        </div>
                                    </Col>

                                </Row>
                            </Nav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    )
}

export default withRouter(Navbar_test)


// import React, { useState } from 'react'
// import { Link, withRouter} from "react-router-dom";
// import { Nav, Navbar, Container, Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
// import './navbar.css'

// function Navbar_test(props) {
//     const [searchError, setsearchError] = useState('')
//     const [searchData, setsearchData] = useState({
//         technology: "",
//         level: "",
//         fromDate: "",
//         toDate: "",
//         search: ""
//     });

//     const updateSearchData = (event) => {
//         setsearchData({
//             ...searchData,
//             [event.target.name]: event.target.value,
//         });
//     };

//     let validateSearch = () => {
//         if (searchData.search) {
//             let regex = /^[a-zA-Z]{2,30}$/;
//             if (regex.test(searchData.search)) {
//                 setsearchError('')
//                 return true;
//             } else {
//                 setsearchError("*Only characters allowed")
//             }

//         } else {
//             setsearchError('*Enter some Questions to search')
//         }
//         return false;
//     }

//     const sendData = (event) => {
//         validateSearch();
//         if (validateSearch()) {
//             console.log('searchData', searchData);
//             setsearchError('')
//         }
//     }

//     return (
//         <div className="navbar_main">
//             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//                 <Container fluid>


//                     <Navbar.Brand className="logo" >
//                         <Link to="/">
//                             <img src="assets/logo2.png" alt="" className="image" height='48px' width='200px' /></Link>
//                     </Navbar.Brand>

//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <div className="" style={{}}>

//                             <Nav className="me-auto">
//                                 <Row className='g-3'>


//                                     <Col md={2}>
//                                         <div className='tech'  >
//                                             <Form.Select aria-label="Default select example"
//                                                 variant="" id="dropdown-basic" className="technol"
//                                                 name="technology"
//                                                 value={searchData.technology}
//                                                 onChange={updateSearchData}
//                                             >
//                                                 <option>Technology</option>
//                                                 <option value="React Js">ReactJs</option>
//                                                 <option value="Vue Js">VueJs</option>
//                                                 <option value="Angular">Angular</option>
//                                                 <option value="Java">Java</option>
//                                             </Form.Select>
//                                         </div>
//                                     </Col>


//                                     <Col md={2}>
//                                         <div className='Linktech'>
//                                             <Form.Select aria-label="Default select example"
//                                                 variant="" id="dropdown-basic"
//                                                 className="linksize"
//                                                 name="level"
//                                                 value={searchData.level}
//                                                 onChange={updateSearchData}
//                                             >
//                                                 <option>Level</option>
//                                                 <option value="Easy">Easy</option>
//                                                 <option value="Intermediate">Intermediate</option>
//                                                 <option value="Expert">Expert</option>
//                                             </Form.Select>
//                                         </div>
//                                     </Col>


//                                     <Col md={2}>
//                                         <div className="formdate">
//                                             <Form.Control type="text" name='date-of-birth' placeholder="From Date" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}
//                                             />

//                                         </div>
//                                     </Col>
//                                     <Col md={2}>
//                                         <div className="todate">
//                                             <Form.Control type="text" name='date-of-birth' placeholder="To Date" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"}
//                                             />

//                                         </div>
//                                     </Col>

//                                     <Col md={3}>
//                                         <div>
//                                             <InputGroup>
//                                                 <FormControl type="text" placeholder="Search Questions" aria-label='Search' className='search '
//                                                     name="search"
//                                                     value={searchData.search}
//                                                     onChange={updateSearchData} />
//                                             </InputGroup>
//                                             {searchError && <div className="errormsg">{searchError}</div>}

//                                         </div>
//                                     </Col>

//                                     <Col md={1}>
//                                         <div>
//                                             <Button style={{ width: "100%" }} className="searchbutton"
//                                                 onClick={sendData}
//                                             >
//                                                 <Link to="/search" id="searchid">Search</Link></Button>
//                                                 {/* <Link onClick={()=>{navigateToSearch()}} id="searchid">Search</Link></Button> */}
//                                         </div>
//                                     </Col>

//                                 </Row>
//                             </Nav>
//                         </div>

//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>



//         </div>
//     )
// }

// export default withRouter(Navbar_test)