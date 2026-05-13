import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
  { name: 'busanFood', text: '부산 맛집 정보 서비스' },
  { name: 'busanTour', text: '부산 관광 정보 서비스' },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// styled(NavLink): NavLink에 스타일 적용
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

  /* NavLink가 active일 때 자동으로 .active 클래스 추가 */
  &.active {
    background: #007bff;
    color: white;
    font-weight: 600;
  }
`;

const Categories = () => (
  <CategoriesBlock>
    {categories.map((c) => (
      <Category
        key={c.name}
        to={c.name === 'all' ? '/' : `/${c.name}`}
        end={c.name === 'all'} // / 경로는 정확히 일치할 때만 active
      >
        {c.text}
      </Category>
    ))}
  </CategoriesBlock>
);

export default Categories;
