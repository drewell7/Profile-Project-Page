import { Container, Row, Col, CardBody, Button } from 'reactstrap';
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='contactSection'>
           <Container>
             <Row>
             <h2 className='contact-title'>Contact</h2>
             </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                

             
                 
                  <div className="contactCard">
                    <CardBody>
                    <h4 className="contactSubtitle">Call or Text</h4>
                    <div className='phoneNumber'>
                    <p className="description">
                      Cell Phone: <br />
                      <a className='phoneLink' href='tel:+13853155788' >(385)315-5788 </a>
                      
                    </p>
                    </div>
                    <h4 className='emailTitle'>Email</h4>
                    <Button className="btn-round ml-1" color="danger" type="button" href='mailto:derekewell@gmail.com'>
                <BsEnvelope />
                derekewell@gmail.com
              </Button>
                    
                    </CardBody>
                  </div>
                  




              
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <div className="socialContactCard">
                  <CardBody>
                    <div>
                  <h4 className="contactSubtitle">Social</h4>
                  </div>
                  <div className='socialButtons'>
                  <div>
                  <Button color="facebook" href='https://www.facebook.com/derek.ewell/'>
                  <i className="fab fa-facebook-square" />
                  Connect with Facebook
                </Button>
                </div>
                <br />
                <div>
                <Button color="linkedin" href='https://www.linkedin.com/in/derek-ewell'>
                  <i className="fab fa-linkedin" />
                  Connect with Linkedin
                </Button>
                </div>
                <br />
                <Button color="github" href='https://github.com/drewell7'>
                  <i className="fab fa-github" />
                  Connect with Github
                </Button>
                </div>
                  </CardBody>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Contact;