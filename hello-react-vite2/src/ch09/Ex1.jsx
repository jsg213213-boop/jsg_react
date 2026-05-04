import './Card.css';

const Ex1 = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__content">{content}</p>
    </div>
  );
};

export default Ex1;
