import styled, { css } from 'styled-components';

const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 10px;

  /* variant에 따른 스타일 분기 */
  ${props => 
    props.variant === 'primary' && 
    css`
      background-color: #007bff;
      color: white;
    `
  }

  ${props => 
    props.variant === 'secondary' && 
    css`
      background-color: #6c757d;
      color: white;
    `
  }
`;

// 기본값 설정 (선택 사항)
Card.defaultProps = {
  variant: 'primary'
};

export default Card;