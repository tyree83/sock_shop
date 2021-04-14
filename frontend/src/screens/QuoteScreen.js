import { Form, Button, Col, Container } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const QuoteScreen = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>Name</Form.Label>
          <Form.Control type='text' placeholder='name' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>
            Email address
          </Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>
            Phone Number
          </Form.Label>
          <Form.Control type='text' placeholder='123-456-7890' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>
            Loading Address
          </Form.Label>
          <Form.Control as='textarea' rows={1} />
        </Form.Group>
        <Form.Row>
          <Col xs={7}>
            <Form.Control placeholder='City' />
          </Col>
          <Col>
            <Form.Control placeholder='State' />
          </Col>
          <Col>
            <Form.Control placeholder='Zip' />
          </Col>
        </Form.Row>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>
            Unloading Address
          </Form.Label>
          <Form.Control as='textarea' rows={1} />
        </Form.Group>
        <Form.Row>
          <Col xs={7}>
            <Form.Control placeholder='City' />
          </Col>
          <Col>
            <Form.Control placeholder='State' />
          </Col>
          <Col>
            <Form.Control placeholder='Zip' />
          </Col>
        </Form.Row>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>
            Square Footage
          </Form.Label>
          <Form.Control as='textarea' rows={1} />
        </Form.Group>
        <Form.Group>
          <h1>Levels</h1>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='2'
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label='3'
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label='4+'
                type={type}
                id={`inline-${type}-4`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <h1>Bedroom's</h1>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='2'
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label='3'
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label='4'
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label='5'
                type={type}
                id={`inline-${type}-5`}
              />
              <Form.Check
                inline
                label='6'
                type={type}
                id={`inline-${type}-6`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <h1>Family/Living Room's</h1>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='2'
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label='3'
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label='4'
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label='5'
                type={type}
                id={`inline-${type}-5`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <h1>Kitchen's</h1>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='2'
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label='3'
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label='4'
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label='5'
                type={type}
                id={`inline-${type}-5`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group>
          <h1>Garage's</h1>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label='2'
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label='3'
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label='4'
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label='5'
                type={type}
                id={`inline-${type}-5`}
              />
            </div>
          ))}
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label style={{ fontSize: 24, padding: 3 }}>Notes</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder='Heavy items, unusually large items, fragile items, etc...'
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Submit for Quote
        </Button>
      </Form>
    </FormContainer>
  );
};

export default QuoteScreen;
