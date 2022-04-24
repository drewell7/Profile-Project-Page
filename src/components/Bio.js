import { Container, Row, Col } from 'reactstrap';
import familyPic from '../assets/img/Familyc.jpg';

const Bio = () => {
    return (
        <div className='bioSection'>
            
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div>
                  <img
                    className="family-image"
                    alt="..."
                    height="430"
                    src={familyPic}
                    width="350"
                  />
                </div>
              </Col>
              <Col className="mt-md-5" lg="6">
                
                <h2 className="about">About Me</h2>
                <Row>
                    <p className="description">
                        Hello, I am a web developer focused on creating responsive, mobile first websites and apps.
                        I have graduated from the NuCamp Coding Bootcamp with a certificate in front-end web and mobile development. I completed classes in HTML, CSS and JavaScript, as well as Bootstrap, React and React Native.
                        When I am not coding I enjoy making music with Ableton and spending time with my family. My son and I love playing 
                        video games together and he's become a big Star Wars fan like his dad.
                    </p>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className='certCardSection'>
          
          </div>
        </div>
    );
};

export default Bio;