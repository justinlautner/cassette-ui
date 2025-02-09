import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";


const UtilitiesNavBar: React.FC = () => {
    return (
        <Navbar color="dark" dark expand="md">
        <NavbarBrand>Cassette</NavbarBrand>
        <Nav className="ms-auto" navbar>
        <NavLink href="#file">File</NavLink>
        <NavLink href="#edit">Edit</NavLink>
        <NavLink href="#view">View</NavLink>
        <NavLink href="#help">Help</NavLink>
        </Nav>
      </Navbar>
    );
};

export default UtilitiesNavBar;