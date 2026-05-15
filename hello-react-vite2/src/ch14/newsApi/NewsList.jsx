import axios from 'axios';
import styled from 'styled-components';
import usePromise from './usePromise';
import NewsItem from './NewsItem';
import PdItemFood from './PdItemFood';
import PdItemHoliday from './PdItemHoliday';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

// API 키 구분 (환경변수 확인 필수)
const apiKey = import.meta.env.VITE_News_API_KEY; 
const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;

const NewsList = ({ category = 'all' }) => {
  const sendData = () => {
    // 1. 부산 맛집 (busanFood)
    if (category === 'busanFood') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`
      );
    } 
    // 2. 부산 관광 (busanTour)
    else if (category === 'busanTour') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`
      );
    } 
    // 3. 공휴일 정보 (holiday)
    else if (category === 'holiday') {
      return axios.get(
        `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${publicDataApiKey}&solYear=2024&_type=json&numOfRows=100`
      );
    } 
    // 4. 일반 뉴스 (business, health, science, technology 등)
    else {
      // 뉴스 API는 country=kr 파라미터가 있어야 한국 뉴스가 잘 나옵니다.
      const query = category === 'all' ? '' : `&category=${category}`;
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
      );
    }
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading) return <NewsListBlock>⏳ 데이터를 불러오는 중...</NewsListBlock>;
  if (error) return <NewsListBlock><p style={{ color: 'red' }}>에러 발생: {error.message}</p></NewsListBlock>;
  if (!resolved) return null;

  // 빨간 줄(no-useless-assignment) 해결: const로 선언하고 즉시 할당
  const rawHolidayItem = resolved.data.response?.body?.items?.item;

  const data = category === 'busanFood'
    ? (resolved.data.getFoodKr?.item || [])
    : category === 'busanTour'
      ? (resolved.data.getAttractionKr?.item || [])
      : category === 'holiday'
        ? (Array.isArray(rawHolidayItem) ? rawHolidayItem : rawHolidayItem ? [rawHolidayItem] : [])
        : (resolved.data.articles || []); // 뉴스 데이터 처리

  if (data.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red', textAlign: 'center' }}>📭 표시할 데이터가 없습니다. (API 키나 카테고리를 확인하세요)</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {data.map((item, index) => {
        // 공공데이터용 컴포넌트
        if (category === 'busanFood' || category === 'busanTour') {
          return <PdItemFood key={index} article={item} />;
        } 
        // 휴일 정보용 컴포넌트
        else if (category === 'holiday') {
          return <PdItemHoliday key={index} holiday={item} />;
        } 
        // 일반 뉴스용 컴포넌트 (비즈니스, 건강 등)
        else {
          return <NewsItem key={item.url || index} article={item} />;
        }
      })}
    </NewsListBlock>
  );
};

export default NewsList;