import { Container, Row, Col, Card, CardBody, CardTitle,  } from 'reactstrap';
import bootstrapSite from '../assets/img/BootcampSite.png';
import ReactNucampSite from '../assets/img/ReactNuCampSite.png';

const Projects = () => {
    return (
        <div className='projects'>
            <div className="section blogs-2" id="blogs-2">
          <Container fluid>
            <h2 className="projectsTitle">Projects</h2>
            <br />
            <Row>
              <Col lg="3">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{ backgroundImage: `url(${ReactNucampSite})`}}
                    
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <CardTitle tag="h3">AI at the Edge</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{ backgroundImage: `url(${bootstrapSite})`}}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <CardTitle tag="h3">A Spectrum of Approaches</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{ backgroundImage: `url(${ReactNucampSite})`}}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <CardTitle tag="h3">Touch on a trend</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-blog card-background"
                  data-animation="zooming"
                >
                  <div
                    className="full-background"
                    style={{ backgroundImage: `url(${bootstrapSite})`}}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <CardTitle tag="h3">Self-Driving Cars</CardTitle>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
    );
};
    
            

export default Projects;