// StyledComponent.jsx
import styled, { css } from 'styled-components';

// props.color 또는 'blue'를 배경색으로 사용
const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 800px;
  margin: 2rem auto;

  @media (max-width: 800px) { width: 100%; flex-direction: column; }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: rgba(255, 255, 255, 0.85); }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover { background: white; color: black; }
    `}

  & + button { margin-left: 1rem; }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted>테두리만</Button>
  </Box>
);

export default StyledComponent;