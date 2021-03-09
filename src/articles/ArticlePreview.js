import { Link } from "react-router-dom";
import moment from "moment";
import * as s from "./ArticlePreview.sc";

export default function ArticleOverview({
  article,
  dontShowPublishingTime,
  dontShowImage,
}) {
  let topics = article.topics.split(" ").filter((each) => each !== "");
  let difficulty = Math.round(article.metrics.difficulty * 100) / 10;

  return (
    <s.ArticlePreview>
      <s.Header>
        <s.Title>
          <Link to={`/read/article?id=${article.id}`}>{article.title}</Link>
        </s.Title>
        <s.Difficulty>{difficulty}</s.Difficulty>
        <s.WordCount>{article.metrics.word_count}</s.WordCount>
      </s.Header>

      <s.Summary>{article.summary}</s.Summary>

      {!dontShowImage && (
        <s.SourceImage>
          <img src={"/news-icons/" + article.icon_name} alt="" />
        </s.SourceImage>
      )}

      {!dontShowPublishingTime && (
        <s.PublishingTime>
          ({moment.utc(article.published).fromNow()})
        </s.PublishingTime>
      )}

      <s.Topics>
        {topics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </s.Topics>
    </s.ArticlePreview>
  );
}
