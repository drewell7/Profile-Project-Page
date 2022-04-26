import { Container, Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import bootstrapSite from '../assets/img/BootcampSite.png';
import ReactNucampSite from '../assets/img/ReactNuCampSite.png';
import musicAppPic from '../assets/img/musicStoreApp.png';
import tracker from '../assets/img/expenseSite.png';

const Projects = () => {
    return (
        <div className='projects container col-sm'>
            <div className="section blogs-2" id="blogs-2">
          <Container fluid>
          <div className='row justify-content-center'>
            <h2 className="projectsTitle">Projects</h2>
            </div>
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
                      
                      
                        <CardTitle tag="h3">Nucamp React Site</CardTitle>
                      
                      <Button color="github" href="https://github.com/drewell7/nucamp-site-react">
                        <i className="fab fa-github" />
                        Github Repository
                    </Button>
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
                      
                      
                        <CardTitle tag="h3">Bootstrap Project</CardTitle>
                      
                      <Button color="github" href="https://github.com/drewell7/profile-project">
                        <i className="fab fa-github" />
                        Github Repository
                    </Button>
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
                    style={{ backgroundImage: `url(${tracker})`}}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      
                        <CardTitle tag="h3">Expense Tracker</CardTitle>
                      
                      <Button color="github" href="https://github.com/drewell7/New-Expense-Tracker">
                        <i className="fab fa-github" />
                        Github Repository
                    </Button>
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
                    style={{ backgroundImage: `url(${musicAppPic})`}}
                  />
                  <CardBody>
                    <div className="content-bottom">
                      
                      
                        <CardTitle tag="h3">React Native Project</CardTitle>
                      
                      <Button color="github" href="https://github.com/drewell7/musicstoreapp">
                        
                        <i className="fab fa-github" />
                        Github Repository
                        
                    </Button>
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