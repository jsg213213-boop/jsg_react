import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// YOUR_API_KEY 자리에 newsapi.org에서 발급받은 키를 입력하세요
const apiKey = import.meta.env.VITE_News_API_KEY;

const NewsList = ({ category = 'all' }) => {
  // 실습4, 확인용
  //   const [articles, setArticles] = useState([]);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // category가 'all'이면 카테고리 파라미터 생략
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
        );
        // 실습 4 확인용
        // setArticles(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        setError('뉴스를 불러오는 데 실패했습니다.');
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]); // category 바뀔 때마다 재호출

  if (loading)
    return (
      <NewsListBlock>
        <p>⏳ 뉴스를 불러오는 중...</p>
      </NewsListBlock>
    );
  if (error)
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </NewsListBlock>
    );
  if (!articles) return null;

  if (articles.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>📭 표시할 뉴스가 없습니다.</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
