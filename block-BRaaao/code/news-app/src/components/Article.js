function Article(props) {
  return (
    <article>
      <img src={props.article.urlToImage} alt="" />
      <a href="#">{props.article.title}</a>
    </article>
  );
}

export default Article;
