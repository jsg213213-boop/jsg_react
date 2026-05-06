import styled from 'styled-components';

// 1. 컨테이너: hover 시 이동 효과
const CardContainer = styled.div`
  width: 250px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// 2. SALE 배지: 색상을 직접 지정해서 조건부 로직을 단순화
const SaleBadge = styled.span`
  background-color: #ff4d4f;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 8px;
`;

const ProductCard = ({ name, price, isDiscounted }) => {
  return (
    <CardContainer>
      <ProductName>{name}</ProductName>
      <PriceWrapper>
        <strong>{price.toLocaleString()}원</strong>
        {isDiscounted === true ? <SaleBadge>SALE</SaleBadge> : null}
      </PriceWrapper>
    </CardContainer>
  );
};

export default ProductCard;