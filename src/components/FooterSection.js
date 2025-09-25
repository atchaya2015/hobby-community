import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
  FaEnvelope,
} from 'react-icons/fa';


export default function FooterSection() {
  const ICON_SIZE = 24;
  return (
    <footer className="bg-white py-5">
      <Container>
        <Row>
          {/* Hobbycue Column */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Hobbycue</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Our Services</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Work with Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          {/* How Do I Column */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">How Do I</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Sign Up</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Add a Listing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Claim Listing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Post a Query</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Add a Blog Post</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Other Queries</a></li>
            </ul>
          </Col>

          {/* Quick Links Column */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Listings</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Blog Posts</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Shop / Store</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Community</a></li>
            </ul>
          </Col>

          {/* Social Media Column */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Social Media</h5>
            <div className="d-flex mb-3">
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><img src="facebook_icon 1.png" alt="image" /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaInstagram size={ICON_SIZE} /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaPinterestP  size={ICON_SIZE}/></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaGooglePlusG  size={ICON_SIZE}/></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaYoutube  size={ICON_SIZE} /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaTelegramPlane  size={ICON_SIZE} /></a>
              <a href="#" className="btn btn-outline-secondary rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}><FaEnvelope   size={ICON_SIZE} /></a>
            </div>

            <h5 className="fw-bold mb-3">Invite Friends</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email ID"
                aria-label="Email ID"
                style={{ borderRight: 'none' }}
              />
              <Button style={{ backgroundColor: '#8064A2', borderColor: '#8064A2', color: 'white' }}>
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