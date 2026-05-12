import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: column; /* 제목과 버튼들을 세로로 배치 */
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Category = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #e9ecef;
  color: #343a40;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #dee2e6;
  }

  &.active {
    background: #007bff;
    color: white;
    font-weight: 600;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #212529;
`;

const Categories = () => {
  const location = useLocation();
  
  // 현재 URL 경로에서 카테고리 이름 추출 (예: '/business' -> 'business')
  // 만약 경로가 '/' 라면 'all'로 간주
  const categoryPath = location.pathname === '/' ? 'all' : location.pathname.replace('/', '');

  // 현재 카테고리 객체 찾기
  const currentCategory = categories.find(c => c.name === categoryPath);
  // 찾지 못했을 경우(예: 잘못된 경로) 기본값 설정
  const titleText = currentCategory ? currentCategory.text : '전체보기';

  return (
    <CategoriesBlock>
      {/* 상단 동적 제목 섹션 */}
      <CategoryTitle>📰 {titleText} 뉴스</CategoryTitle>

      <CategoryList>
        {categories.map(c => (
          <Category
            key={c.name}
            to={c.name === 'all' ? '/' : `/${c.name}`}
            end={c.name === 'all'}
          >
            {c.text}
          </Category>
        ))}
      </CategoryList>
    </CategoriesBlock>
  );
};

export default Categories;