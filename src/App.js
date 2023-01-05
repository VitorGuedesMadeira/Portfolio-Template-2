import './App.css';
import './shared.css';
import Navigation from './components/navigation/Navigation';
import Headline from './components/headline/Headline';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Microverse from './components/microverse/Microverse';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import { useEffect, useState } from 'react';
import loadingGif from './assets/gifs/logoGif2.gif'
import "swiper/css/bundle";
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3000)
    AOS.init();
 }, [])

  return (
    <>
      {isLoading ?
        <div className="App">
        <Navigation />
        <main>
          <Headline />
          <About />
          <Projects />
          <Skills />
          <Microverse />
          <Testimonials />
          <Contact />
        </main>
  
        <div className="noise" />
      </div>
      :
      <>
        <div className="loading-page">
          <img className="loading-gif" src={loadingGif} alt="loading-gif" />
        </div>

        <div className="noise" />
      </>
    }
    </>
  );
}

export default App;
