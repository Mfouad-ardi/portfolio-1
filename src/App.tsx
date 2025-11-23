import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="container mx-auto
    max-w-7xl">
      {/* navbar */}
      <Navbar/>
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* projects */}
      <Projects />
      {/* eperience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App