import { Container, Col, Row, Image } from 'react-bootstrap';

const AboutUsScreen = () => {
  return (
    <Container className='justify-content-md-center text-center'>
      <Row>
        <Col col-6 col-md-4>
          <img
            src='../logo.png'
            alt=''
            width='100'
            height='75'
            className='d-inline-block'
          />
        </Col>
        <Col col-6 col-md-4>
          <h1>About Us</h1>
        </Col>
        <Col col-6 col-md-4>
          <i
            className='fab fa-facebook-square fa-4x'
            href='https://www.facebook.com/WrightMovingCompany'
          ></i>
        </Col>
      </Row>
      <Row className='justify-content-md-center text-center'>
        <Image src='../images/aboutus.jpg' alt='about-us' roundedCircle />
      </Row>
      <Col>
        <Row>
          <p>
            Wright Moving Company is a locally owned, family operated company in
            Heber Valley, with years of experience moving families in and around
            Wasatch and Summit counties. Local and cross country moves. Provide
            moving services six days a week to better fit our customers needs.
            We move everything from homes and storage units to commercial
            businesses​. Fast, efficient, reliable service.
            <strong>We love moving!</strong>
            Licensed and Insured &nbsp; &nbsp; &nbsp; DOT #2860773 &nbsp; &nbsp;
            &nbsp; MC #70681
          </p>
        </Row>
      </Col>
      <Col>
        <Row></Row>
      </Col>
    </Container>
  );
};

export default AboutUsScreen;
