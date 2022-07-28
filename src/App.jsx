import Header from './container/header/Header';
import Nav from './container/nav/Nav';
import About from './container/aboutme/Aboutme';
import Projects from './container/projects/Projects';
import Contact from './container/contact/Contact';
import Footer from './container/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <div class="animation-area">
        <ul class="box-area">
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
