import Header from "./Header";
import Hero from "./Hero";
import Article from "./Article";
import Footer from "./Footer";
import articles from "./articles";

function App(props) {
  return (
    <>
      <Header />
      <Hero />

      <div className="article">
        <h3>Articles</h3>
        <div className="wrap">
          {articles.map((article) => (
            <Article article={article}></Article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
