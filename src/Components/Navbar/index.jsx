import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../images/logo.png';
import './index.css';


const Navigation = ({}) =>{


    const [menu, setMenu] = useState("Courses");
    

    return(

        
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="px-3">
            <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto navbar-right">
          <Nav.Link onClick={() => setMenu("courses")} as={Link} to="/courses" className={menu==="courses"?"active":""}>COURSES</Nav.Link>
          <Nav.Link onClick={() => setMenu("pricing")} as={Link} to="/pricing" className={menu==="pricing"?"active":""}>PRICING</Nav.Link>
          <Nav.Link onClick={() => setMenu("login")} as={Link} to="/login" className={menu==="login"?"active":""}>LOGIN</Nav.Link>
        </Nav>
     </Navbar.Collapse>
      </Container>
    </Navbar>
    
    );

}

export default Navigation;
