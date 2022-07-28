import Header from './container/header/Header';
import Navbar from './container/navbar/Navbar';
import About from './container/aboutme/Aboutme';
import Projects from './container/projects/Projects';
import Contact from './container/contact/Contact';
import Footer from './container/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
