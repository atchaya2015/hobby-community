import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Card,
  Tabs,
  Tab
} from "react-bootstrap";
import { FaGoogle, FaFacebookF, FaEyeSlash, FaUserFriends, FaMapMarkerAlt, FaShoppingBag, FaPlusCircle, FaCheckCircle, FaRegEye } from "react-icons/fa";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";

export default function HomePage() {
  const [key, setKey] = useState("signIn");
  const [passwordShown, setPasswordShown] = useState(false);

  // State for hover effects on cards
  const [isPeopleHovered, setIsPeopleHovered] = useState(false);
  const [isPlaceHovered, setIsPlaceHovered] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isProgramHovered, setIsProgramHovered] = useState(false);
  
  


  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <section className="py-3 bg-light min-vh-100 section-desktop-678">
        <Container>
          <Row className="align-items-center">
            {/* ==== Left Content ==== */}
            <Col lg={6} className="mb-5 mb-lg-0 ">
              <h1 className="fw-bold mb-3">
                Explore your <span className="text-primary">hobby</span> or{" "}
                <span style={{ color: "#9b59b6" }}>passion</span>
              </h1>
              <p className="text-muted">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may be
                about visual or performing arts, sports, games, gardening, model
                making, cooking, indoor or outdoor activities…
              </p>
              <p className="text-muted">
                If you are an expert or a seller, you can add your listing and
                promote yourself, your students, products, services or events. Hop
                on your hobbyhorse and enjoy the ride.
              </p>
              {/* optional illustration */}
              <img
                src="Group 27.png"
                alt="Illustration"
                className="img-fluid mt-4"
              />
            </Col>

            {/* ==== Right Panel - Sign In / Join In ==== */}
            <Col lg={5} className="offset-lg-1 ">
              <div className="p-4 bg-white shadow-sm rounded">
                <Tabs
                  id="auth-tabs"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="signIn" title="Sign In">
                    <Button
                      variant="outline-secondary"
                      className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    >
                      <FaGoogle className="me-2" /> Continue with Google
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    >
                      <FaFacebookF className="me-2" /> Continue with Facebook
                    </Button>
                    <div className="text-center text-muted my-3">or connect with</div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type={passwordShown ? "text" : "password"}
                            placeholder="Password"
                          />
                          <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                            {passwordShown ? <FaRegEye /> : <FaEyeSlash />}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between mb-3">
                        <Form.Check
                          type="checkbox"
                          id="remember-me"
                          label="Remember me"
                        />
                        <a href="#" className="text-decoration-none" style={{ color: "#8064A2" }}>
                          Forgot password?
                        </a>
                      </div>
                      <Button
                        variant="primary"
                        className="w-100"
                        style={{ backgroundColor: "#8064A2", borderColor: "#8064A2" }}
                      >
                        Continue
                      </Button>
                    </Form>
                  </Tab>
                  <Tab eventKey="joinIn" title="Join In">
                    <Button
                      variant="outline-secondary"
                      className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    >
                      <FaGoogle className="me-2" /> Continue with Google
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    >
                      <FaFacebookF className="me-2" /> Continue with Facebook
                    </Button>
                    <div className="text-center text-muted my-3">or connect with</div>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type={passwordShown ? "text" : "password"}
                            placeholder="Password"
                          />
                          <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                            {passwordShown ? <FaRegEye /> : <FaEyeSlash />}
                          </InputGroup.Text>
                        </InputGroup>
                        <small className="text-muted">Password strength: Medium</small>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Text className="text-muted">
                          By continuing, you agree to our{" "}
                          <a href="#" style={{ color: "#8064A2" }}>Terms of Service</a> and{" "}
                          <a href="#" style={{ color: "#8064A2" }}>Privacy Policy</a>.
                        </Form.Text>
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="w-100"
                        style={{ backgroundColor: "#8064A2", borderColor: "#8064A2" }}
                      >
                        Agree and Continue
                      </Button>
                    </Form>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cards Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="mb-4">
            {/* People Card */}
            <Col md={6}>
              <Card
                className="h-100 border-light shadow-sm rounded-3"
                onMouseEnter={() => setIsPeopleHovered(true)}
                onMouseLeave={() => setIsPeopleHovered(false)}
                style={{
                  backgroundColor: isPeopleHovered ? '#8064A2' : 'white',
                  color: isPeopleHovered ? 'white' : 'inherit',
                  transition: 'background-color 0.3s ease, color 0.3s ease'
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaUserFriends style={{ color: isPeopleHovered ? 'white' : '#8064A2' }} className="me-2" size={24} />
                    <Card.Title className="mb-0 fw-bold">People</Card.Title>
                  </div>
                  <Card.Text style={{ color: isProgramHovered ?  'white' : 'black' }}>
                    An individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.
                  </Card.Text>
                  <Button variant={isPeopleHovered ? 'light' : 'outline-primary'} className="mt-3">Connect</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Place Card */}
            <Col md={6} >
              <Card
                className="h-100 border-light shadow-sm rounded-3"
                onMouseEnter={() => setIsPlaceHovered(true)}
                onMouseLeave={() => setIsPlaceHovered(false)}
                style={{
                  backgroundColor: isPlaceHovered ? '#0096C7' : 'white', // Color for Place
                  color: isPlaceHovered ? 'white' : 'inherit',
                  transition: 'background-color 0.3s ease, color 0.3s ease'
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaMapMarkerAlt style={{ color: isPlaceHovered ? 'white' : '#0096C7' }} className="me-2" size={24} />
                    <Card.Title className="mb-0 fw-bold">Place</Card.Title>
                  </div>
                  <Card.Text style={{ color: isProgramHovered ?  "white" : "black" }}>
                    An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.
                  </Card.Text>
                  <Button variant={isPlaceHovered ? 'light' : 'outline-primary'} className="mt-3">Meet up</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Product Card */}
          <Row>
            <Col md={6} >
              <Card
                className="h-100 border-light shadow-sm rounded-3"
                onMouseEnter={() => setIsProductHovered(true)}
                onMouseLeave={() => setIsProductHovered(false)}
                style={{
                  backgroundColor: isProductHovered ? '#745914' : 'white', // Color for Product
                  color: isProductHovered ? 'white' : 'inherit',
                  transition: 'background-color 0.3s ease, color 0.3s ease'
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaShoppingBag style={{ color: isProductHovered ? 'white' : '#745914' }} className="me-2" size={24} />
                    <Card.Title className="mb-0 fw-bold">Product</Card.Title>
                  </div>
                  <Card.Text style={{ color: isProgramHovered ?  "white" : "black" }}>
                    An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.
                  </Card.Text>
                  <Button variant={isProductHovered ? 'light' : 'outline-primary'} className="mt-3">Get it</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Program Card */}
            <Col md={6} >
              <Card
                className="h-100 border-light shadow-sm rounded-3"
                onMouseEnter={() => setIsProgramHovered(true)}
                onMouseLeave={() => setIsProgramHovered(false)}
                style={{
                  backgroundColor: isProgramHovered ? '#EB3445' : 'white', // Color for Program
                  color: isProgramHovered ? 'white' : 'inherit',
                  transition: 'background-color 0.3s ease, color 0.3s ease'
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCheckCircle style={{ color: isProgramHovered ? 'white' : '#EB3445' }} className="me-2" size={24} />
                    <Card.Title className="mb-0 fw-bold">Program</Card.Title>
                  </div>
                  <Card.Text style={{ color: isProgramHovered ?  "white" : "black" }}>
                    An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.
                  </Card.Text>
                  <Button variant={isProgramHovered ? 'light' : 'outline-primary'} className="mt-3">Attend</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-light">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={11}>
              <Card className="p-4 border-light shadow-sm rounded-3 add-your-own-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaPlusCircle style={{ color: '#0096C7' }} className="me-3" size={32} />
                    <Card.Title as="h2" className="mb-0 fw-bold">Add your own</Card.Title>
                  </div>
                  <Card.Text className="text-muted mb-4">
                    Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should
                    be on hobbycue? Go ahead and Add your Own page
                  </Card.Text>
                  <Button variant="outline-secondary" style={{ borderColor: '#8064A2', color: '#8064A2' }}>
                    Add new
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}