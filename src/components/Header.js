import '../App.css';
import headerBackground from '../../src/assets/img/background.jpg';
import { Container, Row } from 'reactstrap';
import { Fade } from "react-awesome-reveal";

const Header = () => {
    return (
        <Container fluid > 
           
        <Row fluid className='header'>
            <div>
           <Fade duration='3000' triggerOnce>
            <div className='headBg' style={{ backgroundImage: `url(${headerBackground})`}}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        
                            <h1 className='title'>Derek Ewell</h1>
                        
                    </div>
                
                    <div className='row justify-content-center'>
                        <h3 className='subtitle'>web developer</h3>
                    </div>
                </div>
            </div>
            </Fade>
            </div>
        </Row>
      
        </Container>
        
    );
};

export default Header;