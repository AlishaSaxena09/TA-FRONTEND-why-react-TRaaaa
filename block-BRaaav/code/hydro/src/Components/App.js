import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Blog from "./Blog";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import "../Stylesheet/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Blog />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
