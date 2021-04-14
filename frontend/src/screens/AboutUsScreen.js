import { Container, Col, Row, Image } from 'react-bootstrap';

const AboutUsScreen = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <h1>About Us</h1>
      </Row>
      <Row className='justify-content-md-center'>
        <Image src='../images/aboutus.jpg' alt='about-us' roundedCircle />
      </Row>
      <Col className='justify-content-md-center'>
        <Row>
          <p>
            Wright Moving Company is a locally owned, family operated company in
            Heber Valley, with years of experience moving families in and around
            Wasatch and Summit counties.
          </p>
        </Row>
        <Row>
          <p>Local and cross country moves.</p>
        </Row>
        <Row>
          <p>
            Provide moving services six days a week to better fit our customers
            needs.
          </p>
        </Row>
        <Row>
          <p>
            We move everything from homes and storage units to commercial
            businesses​.
          </p>
        </Row>
        <Row>
          <p>Fast, efficient, reliable service.</p>
        </Row>
        <Row>
          <p>
            <strong>We love moving!</strong>
          </p>
        </Row>
        <Row>
          <p>
            Licensed and Insured &nbsp; &nbsp; &nbsp; DOT #2860773 &nbsp; &nbsp;
            &nbsp; MC #70681
          </p>
        </Row>
        <Row></Row>
      </Col>
    </Container>
  );
};

export default AboutUsScreen;
