import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Orange Blossom Nusery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Forms" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Customer Order</NavDropdown.Item>
                        <NavDropdown.Item href="#">Distributor Order</NavDropdown.Item>
                        <NavDropdown.Item href="#">Delivery</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reports" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Pending Orders</NavDropdown.Item>
                        <NavDropdown.Item href="#">Upcoming Deliveries</NavDropdown.Item>
                        <NavDropdown.Item href="#">Sales</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;