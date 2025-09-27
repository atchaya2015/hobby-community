import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaFacebookF,FaInstagram,FaTwitter,FaPinterestP,FaEnvelope,FaGooglePlusG,FaYoutube,FaTelegramPlane } from 'react-icons/fa';



export default function FooterSection() {


   const PURPLE = '#8064A2';
const ICON_SIZE_PX = '16px';     
const CONTAINER_DIMENSION = '30px'; 
const LIGHT_GRAY_BORDER = '#CCCCCC';
const ICON_COLOR = '#6D747A';  


  return (
    <footer className="bg-white py-5">
      <Container>
        <Row>
          
          <Col md={3} sm={6} className="mb-4 text-content">
            <h5 className=" fs-14px fw-bold mb-3">Hobbycue</h5>
            <ul className="list-unstyled fs-14px">
              <li><a href="/" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Our Services</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Work with Us</a></li>
              <li><a href="/" className="text-muted text-decoration-none">FAQ</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb- text-content">
            <h5 className="fw-bold fs-14px mb-3">How Do I</h5>
            <ul className="list-unstyled fs-14px">
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Sign Up</a></li>
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Add a Listing</a></li>
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Claim Listing</a></li>
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Post a Query</a></li>
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Add a Blog Post</a></li>
              <li><a href="https://example.com/social-media" className="text-muted text-decoration-none">Other Queries</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4 text-content">
            <h5 className="fw-bold mb-3 fs-14px text-content">Quick Links</h5>
            <ul className="list-unstyled fs-14px">
              <li><a href="/" className="text-muted text-decoration-none">Listings</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Blog Posts</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Shop / Store</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Community</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
  
  <h5 className="fs-14px text-content fw-bold mb-3">Social Media</h5>
  <style dangerouslySetInnerHTML={{__html: `
  .social-icon-circle {
    width: ${CONTAINER_DIMENSION};
    height: ${CONTAINER_DIMENSION};
    border-color: ${LIGHT_GRAY_BORDER} !important;
    color: ${ICON_COLOR} !important;
    font-size: ${ICON_SIZE_PX} !important;
  }
 
  .social-icon-circle:hover,
  .social-icon-circle:active,
  .social-icon-circle:focus {
    background-color: transparent !important; 
    border-color: ${LIGHT_GRAY_BORDER} !important; 
    color: ${ICON_COLOR} !important; 
    box-shadow: none !important; 
  }
  
  
  .btn-outline-secondary.social-icon-circle {
      padding: 0; 
  }
`}} />

<div className="d-flex mb-4">
  

  
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaFacebookF />
  </a>

  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaTwitter />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaInstagram />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaPinterestP />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaGooglePlusG />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaYoutube />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaTelegramPlane />
  </a>
  <a href="https://example.com/social-media" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center social-icon-circle">
    <FaEnvelope /> 
  </a>
</div>
  
  
  <h5 className="fw-bold mb-3">Invite Friends</h5>
  <InputGroup className="mb-3">
    <Form.Control
      placeholder="Email ID"
      aria-label="Email ID"
      
      style={{ borderRight: 'none', borderColor: LIGHT_GRAY_BORDER }} 
    />
    <Button 
    
      style={{ 
        backgroundColor: PURPLE, 
        borderColor: PURPLE, 
        color: 'white',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}
    >
      Invite
    </Button>
  </InputGroup>
</Col>
        </Row>
      </Container>
      <div className="text-center py-3" style={{ backgroundColor: '#F7F5F9' }}>
        <p className="mb-0 text-muted">&copy; Purple Cues Private Limited</p>
      </div>
    </footer>
  );
}