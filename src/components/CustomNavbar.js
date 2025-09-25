import React, { useState } from "react";
import { FaSearch, FaBookmark, FaBell, FaShoppingCart, FaChevronDown, FaCompass, FaStar } from 'react-icons/fa'; 

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,InputGroup,
  Offcanvas
} from "react-bootstrap";

import { FaUser,FaBars } from "react-icons/fa";

export default function CustomNavbar() {
  const [showExplore, setShowExplore] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  // Hover handlers for Explore dropdown
  const handleExploreMouseEnter = () => setShowExplore(true);
  const handleExploreMouseLeave = () => setShowExplore(false);

  // Hover handlers for Hobbies dropdown
  const handleHobbiesMouseEnter = () => setShowHobbies(true);
  const handleHobbiesMouseLeave = () => setShowHobbies(false);
  const PURPLE = '#8064A2';
const TURQUOISE = '#0096C7';

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
     <Navbar expand="lg" bg="white" className="shadow-sm py-2 d-none d-lg-flex">
      <Container fluid className="px-4">
        
        {/* 1. Logo (Set explicit margin 'me-5' for large distance from Search Bar) */}
        <Navbar.Brand href="#" className="me-5">
          {/* Replicating the logo image and tagline structure */}
          <div className="d-flex align-items-center">
            <img
              src="HobbyCue Logo.png" // Replace with your actual logo component/image
              alt="Hobbycue Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>

        {/* 2. Search Bar (Use InputGroup to join input and button, limit width) */}
        <Form className="d-flex" style={{ width: '300px' }}> {/* Set exact width for alignment */}
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search here..."
              className="me-0"
              style={{ borderRadius: '8px 0 0 8px', borderColor: '#ccc' }}
            />
            {/* The Search Button: solid purple background */}
            <Button
              variant="secondary"
              className="d-flex align-items-center justify-content-center"
              style={{ 
                backgroundColor: PURPLE, 
                borderColor: PURPLE,
                borderRadius: '0 8px 8px 0',
                width: '40px', // Fixed width for the button part
              }}
            >
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>

        {/* 3. Right Side Links (The Fix: Use ms-auto to push them far right) */}
        <Nav className="align-items-center ms-auto">
          
          {/* Explore Dropdown with Icon and Custom Color */}
          <NavDropdown 
            title={
              <span style={{ color: PURPLE }}>
                <FaCompass className="me-1" /> Explore 
              </span>
            } 
            id="explore-dropdown"
            show={showExplore}
            onMouseEnter={handleExploreMouseEnter}
            onMouseLeave={handleExploreMouseLeave}
          >
            <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
            <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
            <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
            <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
            <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
          </NavDropdown>

          {/* Hobbies Dropdown with Icon and Custom Color */}
          <NavDropdown  
            title={
              <span style={{ color: PURPLE }}>
                <FaStar className="me-1" /> Hobbies 
              </span>
            } 
            id="hobbies-dropdown" 
            className="ms-3" // Spacing between Explore and Hobbies
            show={showHobbies}
            onMouseEnter={handleHobbiesMouseEnter}
            onMouseLeave={handleHobbiesMouseLeave}
          >
            <NavDropdown.Item href="#">Art</NavDropdown.Item>
            <NavDropdown.Item href="#">Music</NavDropdown.Item>
            <NavDropdown.Item href="#">Sports</NavDropdown.Item>
          </NavDropdown>

          {/* Icons with consistent spacing and purple color */}
          <Nav.Link href="#" className="ms-4" style={{ color: PURPLE }}>
            <FaBookmark size={20} />
          </Nav.Link>
          <Nav.Link href="#" className="ms-3" style={{ color: PURPLE }}>
            <FaBell size={20} />
          </Nav.Link>
          <Nav.Link href="#" className="ms-3" style={{ color: PURPLE }}>
            <FaShoppingCart size={20} />
          </Nav.Link>

          {/* Sign In Button: Outline-primary with PURPLE color */}
          <Button 
            variant="outline-primary" 
            className="ms-4"
            style={{ 
              color: PURPLE, 
              borderColor: PURPLE, 
              borderRadius: '8px', 
              padding: '8px 25px' // Adjust padding to match image height
            }}
          >
            Sign In
          </Button>
        </Nav>
      </Container>
    </Navbar>
      {/* ===== Mobile Navbar ===== */}
      <Navbar bg="white" className="shadow-sm py-2 d-lg-none">
        <Container fluid>
          {/* Logo */}
          
            <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="HobbyCue Logo.png" // Use the imported logo image
              alt="Hobbycue Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
                 

          {/* Right-aligned mobile icons */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="ms-2">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#" className="ms-2">
              <FaBell />
            </Nav.Link>
            <Nav.Link href="#" className="ms-2">
              <FaUser />
            </Nav.Link>
            <Button
              variant="link"
              onClick={handleShowOffcanvas}
              className="ms-2 p-0 text-dark"
            >
              <FaBars size={24} />
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* ===== Offcanvas Sidebar ===== */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavDropdown title="Explore" id="explore-dropdown-mobile" className="mb-2">
              <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
              <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
              <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
              <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hobbies" id="hobbies-dropdown-mobile" className="mb-2">
              <NavDropdown.Item href="#">Art</NavDropdown.Item>
              <NavDropdown.Item href="#">Music</NavDropdown.Item>
              <NavDropdown.Item href="#">Sports</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="fw-bold mb-2">My Profile</Nav.Link>
            <Nav.Link href="#" className="fw-bold mb-2">Bookmarked</Nav.Link>
            <Nav.Link href="#" className="fw-bold mb-2">My Carts</Nav.Link>
            <Button variant="outline-primary" className="mt-3 w-100">Sign In</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}