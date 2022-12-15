import './App.css';
import './shared.css';
import Navigation from './components/navigation/Navigation';
import Headline from './components/headline/Headline';
import About from './components/about/About';
import Microverse from './components/microverse/Microverse';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Headline />
        <About />
        <Microverse />
        <Projects />
        <Contact />
        <Slider />
      </main>

      <div className="noise" />
    </div>
  );
}

export default App;
