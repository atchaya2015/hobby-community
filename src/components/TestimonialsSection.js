import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaQuoteLeft, FaPlayCircle } from 'react-icons/fa';

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10.5}>
            <Card className="p-4 border-light shadow-sm rounded-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-3"> 

                <div 
    className="rounded-circle d-flex align-items-center justify-content-center me-3" 
    style={{ 
      backgroundColor: '#8064A2', 
      width: '40px',
      height: '40px', 
    }}
  >
    {/* Icon is correctly placed inside the circle container */}
    <FaQuoteLeft style={{ color: 'white' }} size={20} />
  </div>
  
  {/* 2. Title (Placed immediately after the circle container) */}
  <Card.Title as="h2" className="mb-0 text-content fs-4 fw-bold">Testimonials</Card.Title>

</div>
                <Card.Text className="fs-18 text-custom mb-4" style={{ color: '#6D747A' }}>
                  In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like
                  minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and
                  exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I
                  can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have
                  discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an
                  excellent idea and I highly recommend it.
                </Card.Text>

                <Row className="align-items-center">
                  <Col md={7} className="mb-3 mb-md-0">
                    <div className="d-flex align-items-center" style={{ backgroundColor: '#CCC1DA', borderRadius: '8px', padding: '10px 15px' }}>
                      <Button variant="link" className="p-0 me-3" style={{ color:'#FFFFFF' }}>
                        <FaPlayCircle size={15} />
                      </Button>
                      <div style={{ flexGrow: 1, height: '4px',color:'#FFFFFF',backgroundColor: '#CCC1DA', borderRadius: '2px' }}>
                        {/* This represents the progress bar */}
                        <div style={{ width: '20%', height: '100%', backgroundColor: '#8064A2', borderRadius: '2px' }}></div>
                      </div>
                      <span className="ms-3 me-2 text-muted" style={{ fontSize: '0.9rem' }}>0:00</span>
                      {/* Placeholder for the person's image in the audio bar */}
                      <img
                        src="Ellipse 12.png" // Replace with actual image for Shubha
                        alt="Profile"
                        className="rounded-circle ms-2"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                      <img
                        src="Ellipse 26.png" // Replace with actual image for Shubha
                        alt="Shubha Nagarajan"
                        className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h5 className="mb-0 fs-18px fw-bold" style={{ color: '#8064A2' }}>Shubha Nagarajan</h5>
                        <p className="mb-0 fs-14px text-info">Classical Dancer</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}