import './ButtonGroup.scss'; // 작성한 SCSS 파일을 import 하세요.

const ButtonGroup = ({ size = 'md', variant, children }) => {
  return (
    <button className={`btn btn-${size}${variant ? ` ${variant}` : ''}`}>
      {children}
    </button>
  );
};

export default ButtonGroup;