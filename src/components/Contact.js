import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const Contact = () => {
    return (
        <div className='contactSection'>
           <Container>
            <Row>
              <Col md="5">
                <h2 >Contact</h2>
                <h4 className="description">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h4>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p className="description">
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p className="description">
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <CardBody>
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Contact;