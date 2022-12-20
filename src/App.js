import './App.css';
import './shared.css';
import Navigation from './components/navigation/Navigation';
import Headline from './components/headline/Headline';
import About from './components/about/About';
import Microverse from './components/microverse/Microverse';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import { useEffect, useState } from 'react';
import loadingGif from './assets/gifs/logoGif2.gif'
import "swiper/css/bundle";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3000)
 })

  return (
    <>
      {isLoading ?
        <div className="App">
        <Navigation />
        <main>
          <Headline />
          <About />
          <Microverse />
          <Projects />
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
