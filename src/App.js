import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  var styles = {
    A: {
      backgroundImage: "url(/orbit.png)",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "-24.5rem",
      // backgroundPositionY: "-5rem", 
      backgroundSize: "70rem",
    },
  };
  return (
    <div className="container" style={styles.A}>
      <Navbar />
      <img src="me.png" alt="my-memoji" />
      <h1>Hello i'm Jesse Beke</h1>
      <p>FrontEnd developer / UI/UX designer</p>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
