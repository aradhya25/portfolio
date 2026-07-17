import '../src/assets/css/styles.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Internships from './components/Internships';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Internships/>
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
    </Router>
  );
}

export default App;
