import './Button.css';

const Ex2 = ({ children, onClick }) => {
  return (
    <button className="MyButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default Ex2;
