import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  
  /* error prop이 true일 때만 red, 기본은 lightgray */
  border: 2px solid ${props => props.error ? 'red' : '#ccc'};

  &:focus {
    border-color: ${props => props.error ? 'red' : '#007bff'};
  }
`;

export default Input;