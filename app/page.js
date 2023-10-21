import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/projects/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./pages/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
