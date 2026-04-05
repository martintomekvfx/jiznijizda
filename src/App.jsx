import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import CrewGrid from './components/CrewGrid';
import CrewMap from './components/Map';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <CrewGrid />
        <CrewMap />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
