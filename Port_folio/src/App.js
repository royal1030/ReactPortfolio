
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import NavigationBar from './component/NavigationBar';
import CarouselComp from './component/CarouselComp';
import resumeData from './resumeData';
import About from './component/About';
import './layout.css';
import Resume from './component/Resume';
import Footer from './component/Footer';
import Projects from './component/Projects';
import ContactUs from './component/ContactUs';
import Cp from './component/Cp';
import {FaLinkedin} from "react-icons/fa";
import { SiLeetcode,SiGmail,SiGithub } from "react-icons/si";

function App() {
  return (
    <>
    <NavigationBar/>
    <div style={{position:'relative'}}>
    <CarouselComp/>
      <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-42%,-80%)', color:'white',fontSize:20, zIndex:100000}}>

      <h1 style={{fontSize:60, color:'white', textDecoration:'bold'}}>I am Royal Choudhary</h1>
      <p>
      {
        resumeData.Description
      }
      </p>

      <hr />
      
      <div className='d-flex justify-content-evenly mt-2'>

      <a href="https://www.linkedin.com/in/royal-choudhary-4aa724201/" target="_blank" rel="noopener">
            <FaLinkedin size={40}/>
      </a>

      <a href="mailto:royalchoudhary74176@gmail.com" target="_blank" rel="noopener">
      <SiGmail size={40}/>
      </a>

      <a href="https://leetcode.com/royal10/" target="_blank" rel="noopener">
            <SiLeetcode size={40}/>
            </a> 

      <a href="https://github.com/royal1030" target="_blank" rel="noopener">
      <SiGithub size={40} />
      </a>
      </div>
      </div>
    </div>
    <About resumeData={resumeData}/>
    <Resume resumeData={resumeData}/>
    <Cp/>
    <Projects resumeData={resumeData}/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
