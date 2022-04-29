import { Container, Row, Col } from 'reactstrap';
import familyPic from '../assets/img/Familyc.jpg';
import certificate from '../assets/img/Bootcamp_Certificate.jpg';
import { FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Bio = () => {
    return (
      
        <div className='bioSection'>
            <div className='aboutAndPic'>
            <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className='family-holder'>
                  <img
                    className="family-image"
                    alt="..."
                    height="430"
                    src={familyPic}
                    width="355"
                  />
                </div>
              </Col>
              <Col className="mt-md-5" lg="6">
                
                <h2 className="about">About Me</h2>
                <Row>
                  <Fade duration='2000'>
                    <p className="description">
                        Hello, I am a web developer focused on creating responsive,
                        mobile first websites and apps.
                        I have graduated from the NuCamp Coding Bootcamp
                        with a certificate in front-end web and mobile development.
                        I completed classes in HTML, CSS and JavaScript,
                        as well as Bootstrap, React and React Native.
                        When I am not coding I enjoy making music with Ableton
                        and spending time with my family.
                        My son and I love playing video games together
                        and he's become a big Star Wars fan like his dad.
                    </p>
                    </Fade>
                </Row>
              </Col>
            </Row>
          </Container>
          </div>
          <div className='certCardSection'>
          <Container>
            <Row className="align-items-center">
              
              <Col className="mt-md-5" lg="6">
                
                <h2 className="about">Skills</h2>
                  <Row>
                  
                  <div className='skills-container'>
                    <Fade duration='2000'>
                        <p className='description'>Tools of the trade. I started my coding journey at NuCamp but I continue to learn more and more every day. 
                        I am proficient in each of these tools and I continue to add to my toolbox.</p>
                        </Fade>
                  
                    <div className='container-fluid'>
                     
                            <FaHtml5 className='htmlLogo' />
                          
                            <FaCss3Alt className='cssLogo' />
                            <FaJs className='jsLogo' />
                            <FaNodeJs className='nodeLogo' />
                            <FaBootstrap className='bstrapLogo' />
                            <FaReact className='reactLogo' />
                         
                        </div>
                        </div>
                </Row>
              </Col>
              <Col lg="6">
                <div>
                  <img
                    className="certificate align-items-center fluid"
                    alt="..."
                    height="430"
                    src={certificate}
                    width="355"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          </div>
        </div>
    );
};

export default Bio;