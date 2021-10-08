import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import {Link} from "react-router-dom";

function Navbar_test() {
    return (
        <div>
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand ><Link to="/"><img src="assets/logo2.png" /></Link></Navbar.Brand>
            </Container>

            <Link to="/search">Search</Link>
        </Navbar>
        {/* </Container> */}
        </div>
    )
}

export default Navbar_test
