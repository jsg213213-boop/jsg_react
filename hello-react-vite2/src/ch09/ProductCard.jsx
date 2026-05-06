import styled from 'styled-components';

// 1. 카드 컨테이너: 배경, 그림자, 호버 애니메이션 설정
const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

// 2. 상품명 스타일
const ProductName = styled.h3`
  margin: 0 0 0.5rem 0; /* 여백 조정 */
  font-size: 1.1rem;
  color: #333;
`;

// 3. 가격과 배지를 가로로 배치하는 로우
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// 4. 가격 스타일
const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1380ed;
`;

// 5. 세일 배지 스타일
const Badge = styled.span`
  background: #f44336;
  color: white;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

// 6. 메인 컴포넌트
const ProductCard = ({ name, price, isDiscounted }) => {
  return (
    <Card>
      <ProductName>{name}</ProductName>
      <PriceRow>
        {/* 숫자에 콤마를 찍어주는 포맷팅 적용 */}
        <Price>{price ? price.toLocaleString() : 0}원</Price>
        {isDiscounted && <Badge>SALE</Badge>}
      </PriceRow>
    </Card>
  );
};

export default ProductCard;