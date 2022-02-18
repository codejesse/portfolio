import "./App.css";
import Navbar from "./components/Navbar";
// import Hand from "./components/Hand";
import About from "./components/About";
import { FaArrowDown } from 'react-icons/fa';
import 'animate.css';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      {/* <Hand /> */}
      <img className="animate__animated animate__rotateIn" src="orbit.png" alt="stack-orbit" />
      <div className="me">
        <img className="animate__animated animate__bounceIn"  src="me.png" alt="stack-orbit" />
      </div>
      <h1 className="animate__animated animate__backInUp" >Hi i'm Jesse Beke</h1>
      <p className="animate__animated animate__backInUp">Frontend developer / UI/UX Designer</p>
      <div class="container">
        <span class="circle">
          <FaArrowDown className="fa"/>
        </span>
        <span class="pulse"></span>
      </div>
      <About />
    </div>
  );
}

export default App;
