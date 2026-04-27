import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('Say 컴포넌트 동작 중');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('어서오세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
      <button style={{ color: 'black' }} onClick={() => setColor('black')}>검정색</button>
      
    </div>
  );
};

export default Say;