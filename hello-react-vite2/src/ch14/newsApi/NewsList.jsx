import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from './usePromise';
import PdItemFood from './PdItemFood';
import PdItemHoliday from './PdItemHoliday'; // 새 컴포넌트

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const apiKey = import.meta.env.VITE_News_API_KEY;
const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;

const NewsList = ({ category = 'all' }) => {
  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'busanFood') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'busanTour') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'holiday') {
      return axios.get(
        `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${publicDataApiKey}&solYear=2026&_type=json&numOfRows=50`,
      );
    } else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`,
      );
    }
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading)
    return (
      <NewsListBlock>
        <p>⏳ 데이터를 불러오는 중...</p>
      </NewsListBlock>
    );
  if (error)
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>에러 발생: {error.message}</p>
      </NewsListBlock>
    );
  if (!resolved) return null;

  // 💡 수정 포인트: 데이터를 한 번에 추출하여 const로 안전하게 선언합니다.
  const getData = () => {
    if (category === 'busanFood') {
      return resolved.data.getFoodKr?.item || [];
    }
    if (category === 'busanTour') {
      return resolved.data.getAttractionKr?.item || [];
    }
    if (category === 'holiday') {
      const item = resolved.data.response?.body?.items?.item;
      return Array.isArray(item) ? item : item ? [item] : [];
    }
    return resolved.data.articles || [];
  };

  const data = getData(); // 빨간 줄 해결 및 안전한 데이터 할당

  if (data.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>📭 표시할 데이터가 없습니다.</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {data.map((item, index) => {
        if (category === 'busanFood' || category === 'busanTour') {
          return <PdItemFood key={index} article={item} />;
        } else if (category === 'holiday') {
          return <PdItemHoliday key={index} holiday={item} />;
        } else {
          return <NewsItem key={item.url || index} article={item} />;
        }
      })}
    </NewsListBlock>
  );
};

export default NewsList;