import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .contents {
    h2 {
      margin: 0 0 8px 0;
      font-size: 1rem;
      a {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      color: #666;
      font-size: 0.9rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
