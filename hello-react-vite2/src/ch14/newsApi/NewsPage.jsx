import { useParams } from 'react-router-dom';
import NewsList from './NewsList';
import Categories from './Categories';

const categoryNames = {
  all: '전체보기',
  business: '비즈니스',
  entertainment: '엔터테인먼트',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술',
  busanFood: '부산 맛집 정보 서비스',
  busanTour: '부산 관광 정보 서비스',
  animalDaejeon: '대전 유기동물 공고 현황', // 추가
};

const NewsPage = () => {
  const { category } = useParams();
  const currentCategory = category || 'all';
  const categoryText = categoryNames[currentCategory] || '전체보기';

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        📰 {categoryText}
      </h1>
      <Categories />
      <NewsList category={currentCategory} />
    </>
  );
};

export default NewsPage;