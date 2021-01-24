import PropTypes from "prop-types";

function Article(props) {
  return (
    <article>
      <img src={props.article.urlToImage} alt="" />
      <a href="#">{props.article.title}</a>
    </article>
  );
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Article;
