import "./App.css";
import Navbar from "./components/Navbar";
// import Hand from "./components/Hand";
import About from "./components/About";
import { FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hand /> */}
      <img src="orbit.png" alt="stack-orbit" />
      <div className="me">
        <img src="me.png" alt="stack-orbit" />
      </div>
      <h1>Hi i'm Jesse Beke</h1>
      <p>Frontend developer / UI/UX Designer</p>
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
