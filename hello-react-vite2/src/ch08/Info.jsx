import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    return () => {
      console.log('cleanup'); // 언마운트되기 전 또는 다음 실행 전
    };
  }, [name]); // 마운트될 때만 실행하려면 [] 빈 배열

  return (
    <input value={name} onChange={(e) => setName(e.target.value)} />
  );
};
export default Info;