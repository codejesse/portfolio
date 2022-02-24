import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  var styles = {
    A: {backgroundImage: "url(/orbit.png)", backgroundRepeat: "no-repeat", backgroundPositionX: "center", backgroundPositionY: "-3rem", backgroundSize: "68rem"},
  }
  return (
    <div className="container" style={styles.A}>
      <Navbar />
      <img src="me.png" alt="my-memoji" />
      <h1>Hello i'm Jesse Beke</h1>
      <p>FrontEnd developer / UI/UX designer</p>
      <About />
      <Projects />
    </div>
  );
}

export default App;
