import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <Col>
        <Row className='justify-content-center'>
          <h1 className='display-4'>Welcome to Wright Moving Company</h1>
        </Row>
        <Row className='justify-content-center'>
          <Image src='../images/carousel/c1.jpg' alt='First slide' rounded />
          <h2 className='font-weight-light'>
            Let the experienced moving professionals at Wright Moving Company
            take care of you on your moving day. We know how stressful moving
            can be no matter how big or small the job. That's why we take pride
            in providing organized, trustworthy, and reliable service. We love
            what we do!
          </h2>
        </Row>
      </Col>
      <Col>
        <Row className='justify-content-center'>
          <h1>Customer Reviews</h1>
        </Row>

        <Carousel>
          <Carousel.Item>
            <Image
              src='../images/carousel/yelp1.jpg'
              alt='First slide'
              rounded
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src='../images/carousel/yelp2.jpg'
              alt='Second slide'
              rounded
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src='../images/carousel/yelp3.jpg'
              alt='Third slide'
              rounded
            />
          </Carousel.Item>
        </Carousel>
      </Col>

      <Row>
        <Col></Col>
      </Row>
    </>
  );
};

export default HomeScreen;
