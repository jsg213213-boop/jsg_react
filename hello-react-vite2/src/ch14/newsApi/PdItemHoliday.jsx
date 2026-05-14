import styled from 'styled-components';

const HolidayItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 8px solid #ff6b6b;

  .date_circle {
    background: #ff6b6b; color: white;
    width: 50px; height: 50px; border-radius: 50%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    margin-right: 1.5rem; font-size: 0.8rem;
    .day { font-size: 1.1rem; font-weight: bold; }
  }
  .content {
    h2 { margin: 0; font-size: 1.1rem; }
    p { margin: 3px 0 0; color: #777; font-size: 0.9rem; }
  }
`;

const PdItemHoliday = ({ holiday }) => {
  const { dateName, locdate } = holiday;
  const dateStr = String(locdate);
  return (
    <HolidayItemBlock>
      <div className="date_circle">
        <span>{dateStr.substring(4, 6)}월</span>
        <span className="day">{dateStr.substring(6, 8)}</span>
      </div>
      <div className="content">
        <h2>{dateName}</h2>
        <p>2026년 국가 지정 휴일</p>
      </div>
    </HolidayItemBlock>
  );
};

export default PdItemHoliday;