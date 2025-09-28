import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CallToActionSection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#F7F5F9' }}> {/* Light background matching the image */}
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={8}>
            <h1 className=" fs-36px fw-bold mb-4" style={{ color: '#000000' }}>
              Your <span style={{ color: '#9b59b6' }}>Hobby</span>, Your <span style={{ color: '#0096C8' }}>Community</span>...
            </h1>
            <Button variant="primary" style={{ backgroundColor: '#8064A2', borderColor: '#8064A2' }}>
              Get started
            </Button>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-end">
            {/* Scroll to top button - for display purposes only as functionality requires JS */}
            <div className="text-center text-muted" style={{ fontSize: '0.8rem' }}>
              <a href="#top" className="text-decoration-none text-muted">
                <div className="border rounded-circle d-flex align-items-center justify-content-center mx-auto mb-1"
                     style={{ width: '30px', height: '30px', borderColor: '#CCCCCC' }}>
                  <img src= "arrow_forward.png " alt="People engaging in various hobbies"/>{/* You might need Font Awesome for this */}
                </div>
                Go to top <br/> (Ctrl+Home)
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Illustration of people with hobbies */}
            <img
              src="Group.png" // Placeholder image, replace with your illustration
              alt="People engaging in various hobbies"
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
           <Col>
            {/* Illustration of people with hobbies */}
            <img
              src="5820098 1.png" // Placeholder image, replace with your illustration
              alt="People engaging in various hobbies"
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}