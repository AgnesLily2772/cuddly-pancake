import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import  Home  from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
<<<<<<< Updated upstream
import Blogs from './Components/Blogs'
=======
import Experience from './Components/Experience';
>>>>>>> Stashed changes
function App() {
  return (
    <>
        <NavBar/>
        <div className='App'>
        <Home/>
        <About/>
        <Skills/>
<<<<<<< Updated upstream
        <Blogs/>
        <Projects/>
=======
        <Projects/>
        <Experience/>
>>>>>>> Stashed changes
        <Contact/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
