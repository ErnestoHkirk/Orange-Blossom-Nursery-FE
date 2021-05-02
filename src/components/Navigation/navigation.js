import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import EmployeeContext from '../../context/EmployeeContext';
import "./navigation.css";

export class navigation extends Component {
    static contextType = EmployeeContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.processLogout();
    }

    renderLoginNav() {
        return(
            <Nav.Link as={Link} eventKey={2} to="/login">
                Login
            </Nav.Link>
        )
    }
    renderEmployeeNav() {
        return (
            <React.Fragment>
            <Nav className="mr-auto">
                <NavDropdown title="Forms" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/customerOrder" >Customer Order</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reports" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/statement" >Statements</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} as={Link} onClick={()=>this.handleLogoutClick()} to="/">
                        Logout
                    </Nav.Link>
                </Nav>
            </React.Fragment>
        )
    }
    render() {
        const checkForEmployee = TokenService.hasAuthToken();
        const redirectHome = checkForEmployee ? '/dashboard' : '/';
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark">
            <Navbar.Brand as={Link} to={redirectHome} >Orange Blossom Nursery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {!checkForEmployee
                    ? this.renderLoginNav()
                    : this.renderEmployeeNav()}
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default navigation