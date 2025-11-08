import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
<section id="kontak" style={{ textAlign: "center", marginTop: "60px" }}>
  <h2>Kontak</h2>
  <p>Silakan hubungi saya melalui email:</p>
  <a 
    href="mailto:gunadi.dadi@gmail.com" 
    style={{ 
      color: "#0077ff", 
      textDecoration: "none", 
      fontWeight: "bold" 
    }}
  >
    gunadi.dadi@gmail.com
  </a>
</section>

export default App;
