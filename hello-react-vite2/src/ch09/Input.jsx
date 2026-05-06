import styled, { css } from 'styled-components';
const Input = styled.input`
  width: 80%;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1f84e8;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: #e92213;
      &:focus {
        border-color: #e92213;
      }
    `}
`;

const ErrorMessage = styled.p`
  color: #e92213;
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

const InputComponent = ({ error, errorMessage, ...rest }) => {
  return (
    <div>
      <Input error={error} {...rest} />
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default InputComponent;