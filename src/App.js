import './App.css';
import Header from './components/Header';
import Bio from './components/Bio.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className='body'>
      
        <Header />
      
        <Bio />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
